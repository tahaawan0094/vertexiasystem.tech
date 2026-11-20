import React from 'react';
import './PixelCar.css';

// 62 columns x 19 rows data-driven pixel sports car
// Legend:
// '.' = empty / hidden
// 'a', 't' = cream (#ece8dd)
// 'm' = mid cream (#c9c4b8)
// 'n' = muted purple-grey (#827e96)
// 'g' = light lavender glass (#d2bcff)
// 'v' = lavender accent (#B794FF)
// 'u' = dim lavender underglow (#5c468c)
const CAR_ROWS = [
  "..............................................................",
  "..............................................................",
  "..............................................................",
  "..................aaaaaaaaaaaaaaaaa...........................",
  "...............aaaagggggggggggagggggaa........................",
  "..............aaggggggggggggggagggggggga......................",
  "............aagggggggggggggggaaaggggggggaaa...................",
  ".uu.......mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm.............",
  ".....mmvvvvvvvvvvvmmmmmmmmmmmmmmmvvvvvvvvvvvvvvmmmmmm.........",
  "uuu.mmmmmmmmm...mmmmmmmmmmmmmmmmmmmmmmmmmm...mmmmmmmvvv.......",
  "...mvmmmmmm.ttttt.mmmmmmmmmmmmmmmmmmmmmm.ttttt.mmmmmmvv.......",
  ".uuvnnnnnnntt...ttnnnnnnnnnnnnnnnnnnnnnntt...ttnnnnnnnnn......",
  "...nnnnnnn.tt.v..t.nnnnnnnnnnnnnnnnnnnn.tt.v..t.nnnnnnnn......",
  ".uunnnnnnn.t.vvv.t.nnnnnnnnnnnnnnnnnnnn.t.vvv.t.nnnnnnnn......",
  "...nnnnnnn.tt.v..t.nnnnnnnnnnnnnnnnnnnn.tt.v..t.nnnnnnnn......",
  "...nnnnnnnnttt.tttnnnnnnnnnnnnnnnnnnnnnnttt.tttnnnnnnnnn......",
  "............ttttt..uuuuuuuuuuuuuuuuuuuuu.ttttt................",
  "..............................................................",
  "......u....u....u....u....u....u....u....u....u....u..........",
];

export default function PixelCar({ className = '' }) {
  return (
    <div
      className={`pxcar ${className}`}
      role="img"
      aria-label="Pixel illustration of a sports car"
    >
      {CAR_ROWS.map((row, r) =>
        row.split('').map((cell, c) => {
          if (cell === '.') {
            return <i key={`${r}-${c}`} className="cell-x" aria-hidden="true" />;
          }
          let colorClass = '';
          if (cell === 'a' || cell === 't') colorClass = 'cell-cream';
          else if (cell === 'm') colorClass = 'cell-mid';
          else if (cell === 'n') colorClass = 'cell-muted';
          else if (cell === 'g') colorClass = 'cell-glass';
          else if (cell === 'v') colorClass = 'cell-purple';
          else if (cell === 'u') colorClass = 'cell-underglow';

          return <i key={`${r}-${c}`} className={`cell ${colorClass}`} aria-hidden="true" />;
        })
      )}
    </div>
  );
}
