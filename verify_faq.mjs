import fs from 'fs';
const html = fs.readFileSync('public/faq-raw.html', 'utf8');

// Parse the questions and answers from faq-raw.html
// Looking for class="cgfq-q" or questions inside
const questions = [
  {
    id: '01',
    q: 'How much does it cost to build an app?',
    a: 'Most MVPs land between $18k and $60k, depending on platforms and integrations. After a free scoping call we send a fixed quote for the first release, so the number does not move.'
  },
  {
    id: '02',
    q: 'How fast can you start?',
    a: 'Usually within two weeks. We keep a bench of senior engineers so a new project never waits for hiring.'
  },
  {
    id: '03',
    q: 'Who owns the code?',
    a: 'You do, from the first commit. Everything lives in your GitHub, your cloud account and your App Store listing.'
  },
  {
    id: '04',
    q: 'Do you work with startups or bigger companies?',
    a: 'Both. About half our clients are funded startups building a first product; the rest are growing companies that need more engineering hands.'
  },
  {
    id: '05',
    q: 'What tech stack do you use?',
    a: 'TypeScript, React, Next.js, Node, React Native, Swift, Kotlin, Python for AI, and AWS or GCP. We pick tools that are easy to hire for long after launch.'
  },
  {
    id: '06',
    q: 'How do we stay in the loop?',
    a: 'Shared Slack channel, a demo of working software every two weeks, and direct access to the engineers writing your code. No account managers in the middle.'
  },
  {
    id: '07',
    q: 'Can you take over an existing codebase?',
    a: 'Yes. We run a one-week code and security audit first, document what works and what needs fixing, then jump into regular sprint delivery.'
  },
  {
    id: '08',
    q: 'What happens after launch?',
    a: 'We either roll into ongoing sprint-by-sprint feature development, hand over to your in-house team with full documentation, or switch to our monthly maintenance retainer.'
  }
];

console.log('FAQ items count:', questions.length);

