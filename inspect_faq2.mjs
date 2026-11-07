import fs from 'fs';
const html = fs.readFileSync('public/faq-raw.html', 'utf8');

const classes = [...new Set(html.match(/class="[^"]*cgfq[^"]*"/g))];
console.log('FAQ classes:', classes);

const idx = html.indexOf('How much does it cost');
console.log('Q1 index:', idx);
if (idx !== -1) {
  console.log(html.substring(idx - 100, idx + 800).replace(/<[^>]+>/g, ' '));
}

