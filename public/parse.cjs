






const fs = require('fs');
const html = fs.readFileSync('public/template-raw.html', 'utf8');

// Find all font faces
const fontMatches = [...html.matchAll(/font-family:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('FONTS:', [...new Set(fontMatches)]);

// Find all script src
const scriptMatches = [...html.matchAll(/src="([^"]+\.js[^"]*)"/g)].map(m => m[1]);
console.log('SCRIPTS:', scriptMatches.slice(0, 10));

// Find all image src or url()
const imgMatches = [...html.matchAll(/(https:\/\/framerusercontent\.com\/[^"')\s]+)/g)].map(m => m[1]);
console.log('ASSETS:', [...new Set(imgMatches)].slice(0, 20));
