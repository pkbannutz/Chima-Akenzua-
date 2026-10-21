import { readFileSync, writeFileSync } from 'node:fs';

const file = 'src/data/chimaData.ts';
const source = readFileSync(file, 'utf8');
const output = source.replace(/"\/src\/assets\/actual\/([^"]+)"/g, (_, filename) =>
  `new URL('../assets/actual/${filename}', import.meta.url).href`
);
if (output === source) throw new Error('Expected local image paths not found');
writeFileSync(file, output);
console.log('Resolved local photo paths for the production build');
