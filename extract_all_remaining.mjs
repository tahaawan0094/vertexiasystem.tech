import fs from 'fs';
const html = fs.readFileSync('public/template-raw.html', 'utf8');

function extractBetween(label1, label2, filename) {
  const i1 = html.indexOf(label1);
  const i2 = label2 ? html.indexOf(label2, i1 + 50) : html.length;
  if (i1 !== -1 && i2 !== -1) {
    const sub = html.substring(i1, i2);
    fs.writeFileSync(filename, sub);
    console.log(`Saved ${filename} (${sub.length} bytes)`);
  } else {
    console.log(`Failed to find ${label1} or ${label2}`);
  }
}

extractBetween('Ways to work with us', 'Questions, answered', 'public/pricing-raw.html');
extractBetween('Questions, answered', 'Notes from the build', 'public/faq-raw.html');
extractBetween('Notes from the build', 'name="CgCta"', 'public/blog-raw.html');
extractBetween('name="CgCta"', 'name="CgFoot"', 'public/cta-raw.html');
extractBetween('name="CgFoot"', '</html>', 'public/foot-raw.html');

