import fs from 'fs';
const html = fs.readFileSync('public/faq-raw.html', 'utf8');

// Find all questions and answers
const regex = /<li class="cgfq-item[^"]*"[\s\S]*?<button[^>]*>([\s\S]*?)<\/button>[\s\S]*?<div class="cgfq-ans"[^>]*>([\s\S]*?)<\/div>/g;
let m;
const faqs = [];
while ((m = regex.exec(html)) !== null) {
  const q = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const a = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  faqs.push({ q, a });
}
console.log('Faqs parsed:', faqs.length);
faqs.slice(0, 8).forEach((f, i) => {
  console.log(`Q${i + 1}: ${f.q}`);
  console.log(`A${i + 1}: ${f.a}`);
});

