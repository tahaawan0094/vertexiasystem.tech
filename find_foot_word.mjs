import fs from 'fs';
const html = fs.readFileSync('public/foot-raw.html', 'utf8');

const idx = html.lastIndexOf('CODEFORGE');
console.log('Last CODEFORGE index:', idx);
if (idx !== -1) {
  console.log(html.substring(idx - 200, idx + 400));
}

