import fs from 'fs';
const html = fs.readFileSync('public/blog-raw.html', 'utf8');

const imgs = [...html.matchAll(/<img[^>]*src="([^"]+)"/g)].map(m => m[1]);
console.log('Blog images:', [...new Set(imgs)]);

