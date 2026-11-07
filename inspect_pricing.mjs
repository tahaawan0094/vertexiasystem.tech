import fs from 'fs';
const html = fs.readFileSync('public/pricing-raw.html', 'utf8');

const clean = html.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<script[\s\S]*?<\/script>/g, '');
console.log('PRICING CLEAN SNIPPET:');
console.log(clean.substring(0, 3000).replace(/<!-- -->/g, ''));

