import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const data = JSON.parse(fs.readFileSync('./public/standings.json', 'utf8'));

const outputDir = './src/assets/logos';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, {recursive: true});
}

for (const team of data.standings) {
  const url = team.teamLogo;
  const filename = team.teamAbbrev.default + '.svg';
  const filePath = path.join(outputDir, filename);

  const res = await fetch(url);
  const svg = await res.text();

  fs.writeFileSync(filePath, svg);
  console.log(`Downloaded ${filename}`);
}
