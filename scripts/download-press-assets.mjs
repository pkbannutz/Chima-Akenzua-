import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const gallery = JSON.parse(await readFile('src/data/pressGallery.json', 'utf8'));
const directory = 'public/press';
await mkdir(directory, { recursive: true });

const failed = [];
let downloaded = 0;
let reused = 0;
let index = 0;

async function download(item) {
  if (!/^690b17_[a-zA-Z0-9~.-]+\.jpg$/.test(item.filename)) {
    throw new Error('Invalid press image filename: ' + item.filename);
  }
  const path = join(directory, item.filename);
  try {
    if ((await stat(path)).size > 500) {
      reused++;
      return;
    }
  } catch {}
  const url = 'https://static.wixstatic.com/media/' + item.filename;
  let error;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-press-archive/1.0)' },
        signal: AbortSignal.timeout(30000)
      });
      if (!response.ok) throw new Error('HTTP ' + response.status + ': ' + item.filename);
      if (!(response.headers.get('content-type') || '').startsWith('image/')) {
        throw new Error('Unexpected response type: ' + item.filename);
      }
      const data = Buffer.from(await response.arrayBuffer());
      if (data.length < 500 || data.length > 25000000) throw new Error('Invalid image size: ' + item.filename);
      await writeFile(path, data);
      downloaded++;
      console.log('Downloaded', item.filename, data.length, 'bytes');
      return;
    } catch (cause) {
      error = cause;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 900));
    }
  }
  failed.push(item.filename + ': ' + String(error));
}
async function worker() {
  while (index < gallery.length) {
    const item = gallery[index++];
    await download(item);
  }
}
await Promise.all(Array.from({ length: 6 }, worker));
console.log('Press originals: downloaded=' + downloaded + ', reused=' + reused + ', failed=' + failed.length);
for (const failure of failed) console.warn('WARNING:', failure);
