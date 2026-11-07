import fs from 'fs';
const html = fs.readFileSync('public/template-raw.html', 'utf8');

const i1 = html.toLowerCase().indexOf('build your product');
console.log('build your product index:', i1);

const i2 = html.toLowerCase().indexOf('have a product in mind');
console.log('have a product in mind index:', i2);

if (i1 !== -1 && i2 !== -1) {
  fs.writeFileSync('public/cta-raw.html', html.substring(i1 - 200, i2));
  fs.writeFileSync('public/foot-raw.html', html.substring(i2 - 200));
  console.log('Saved cta-raw.html and foot-raw.html');
}

