import React from 'react';

export default function CornerBracket({ children, className = '', cornerColor, offset = 4 }) {
  const cornerStyle = {
    borderColor: cornerColor || undefined,
  };

  return (
    <div className={`corner-frame ${className}`}>
      <span className="c-mark c-tl" style={{ ...cornerStyle, top: `-${offset}px`, left: `-${offset}px` }}></span>
      <span className="c-mark c-tr" style={{ ...cornerStyle, top: `-${offset}px`, right: `-${offset}px` }}></span>
      <span className="c-mark c-bl" style={{ ...cornerStyle, bottom: `-${offset}px`, left: `-${offset}px` }}></span>
      <span className="c-mark c-br" style={{ ...cornerStyle, bottom: `-${offset}px`, right: `-${offset}px` }}></span>
      {children}
    </div>
  );
}
