import fs from 'fs';
const html = fs.readFileSync('public/foot-raw.html', 'utf8');

const clean = html.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<script[\s\S]*?<\/script>/g, '');
console.log('Foot snippet:');
console.log(clean.substring(0, 2000).replace(/<!-- -->/g, ''));

