import fs from 'fs';
const html = fs.readFileSync('public/foot-raw.html', 'utf8');

const idx = html.indexOf('cgft-logo');
console.log('cgft-logo index:', idx);
if (idx !== -1) {
  console.log(html.substring(idx - 100, idx + 800));
}

// Find any svg or text for the huge logo
const m = html.match(/<svg[^>]*class="[^"]*cgft[^"]*"[\s\S]*?<\/svg>/);
if (m) {
  console.log('SVG logo found:', m[0].substring(0, 500));
}

