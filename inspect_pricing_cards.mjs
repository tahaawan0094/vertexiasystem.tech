import fs from 'fs';
const html = fs.readFileSync('public/pricing-raw.html', 'utf8');

const cards = [...html.matchAll(/<li class="cgpr-card[^"]*"[\s\S]*?<\/li>/g)];
console.log('Cards found:', cards.length);
cards.slice(0, 3).forEach((c, i) => {
  console.log(`--- CARD ${i + 1} ---`);
  console.log(c[0].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 400));
});

