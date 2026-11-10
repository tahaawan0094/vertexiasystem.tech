import React from 'react';
import './PixelDigits.css';

// 5 columns x 7 rows per digit: '#' = lit cell, '.' = dark cell
const GLYPHS = {
  0: ['.###.', '#...#', '#..##', '#.#.#', '##..#', '#...#', '.###.'],
  1: ['..#..', '.##..', '..#..', '..#..', '..#..', '..#..', '.###.'],
  2: ['.###.', '#...#', '....#', '...#.', '..#..', '.#...', '#####'],
  3: ['####.', '....#', '....#', '.###.', '....#', '....#', '####.'],
  4: ['...#.', '..##.', '.#.#.', '#..#.', '#####', '...#.', '...#.'],
  5: ['#####', '#....', '####.', '....#', '....#', '#...#', '.###.'],
  6: ['.###.', '#....', '#....', '####.', '#...#', '#...#', '.###.'],
  7: ['#####', '....#', '...#.', '..#..', '.#...', '.#...', '.#...'],
  8: ['.###.', '#...#', '#...#', '.###.', '#...#', '#...#', '.###.'],
  9: ['.###.', '#...#', '#...#', '.####', '....#', '....#', '.###.'],
};

// Usage: <PixelDigits value="03" />
// Digits alternate white, purple, white, purple...
export default function PixelDigits({ value = '03', className = '' }) {
  return (
    <div className={`pxd ${className}`} role="img" aria-label={value}>
      {String(value).split('').map((ch, i) => (
        <div
          key={i}
          className="pxd-digit"
          style={{ '--px-on': i % 2 === 0 ? 'var(--px-light)' : 'var(--px-accent)' }}
        >
          {(GLYPHS[ch] || GLYPHS[0]).join('').split('').map((c, j) => (
            <span key={j} className={`pxd-cell${c === '#' ? ' on' : ''}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

