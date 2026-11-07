import fs from 'fs';
import path from 'path';

function searchDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file === 'public') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      searchDir(full);
    } else if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css')) {
      const content = fs.readFileSync(full, 'utf8');
      if (/codeforge/i.test(content)) {
        console.log('Found in:', full);
      }
    }
  }
}

searchDir('.');

