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

// Check the Wix source pages for the actual reel identifiers (diagnostic only).
for (const [label, url] of [
  ['ACTION', 'https://www.chimaakenzua.com/'],
  ['PARKOUR', 'https://www.chimaakenzua.com/parkourdirector']
]) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
    const html = await response.text();
    const wixVideoIds = [...new Set(html.match(/(?:11062b|690b17)_[a-f0-9]{32}/g) || [])];
    const videoUrls = [...new Set(html.match(/https:\/\/video\.wixstatic\.com\/video\/[^"'<> ]+/g) || [])];
    console.log('VIDEO SOURCE AUDIT', label, 'HTTP', response.status, JSON.stringify({ wixVideoIds: wixVideoIds.slice(0, 60), videoUrls: videoUrls.slice(0, 25) }));
    const decoded = html.replaceAll('\\\\/', '/').replaceAll('\\\\u002F', '/').replaceAll('&quot;', '"');
    const links = [...new Set([...decoded.matchAll(/(?:https?:)?\\/\\/(?:player\\.vimeo\\.com|vimeo\\.com|youtube\\.com|youtu\\.be|video\\.wixstatic\\.com|repackager\\.wixmp\\.com)[^"<>\\s]{0,180}/g)].map(x => x[0]))];
    console.log('VIDEO LINKS', label, JSON.stringify(links.slice(0, 30)));
    for (const term of ['Play Direction & Coordination Reel','Play Action Reel','vimeo','wix:video://','videoId','videoUrl','videoSource','player.vimeo','m3u8']) {
      const pos = decoded.toLowerCase().indexOf(term.toLowerCase());
      if (pos !== -1) console.log('VIDEO CONTEXT', label, term, decoded.slice(Math.max(0, pos - 120), pos + 320));
    }

  } catch (error) {
    console.log('VIDEO SOURCE AUDIT', label, String(error));
  }
}
