import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import './animated-grid-pattern.css';

export function AnimatedGridPattern({
  width = 44,
  height = 44,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 30,
  maxOpacity = 0.15,
  duration = 3,
  repeatDelay = 1,
  className = '',
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getPos = useCallback(() => {
    const maxX = Math.max(1, Math.floor(dimensions.width / width));
    const maxY = Math.max(1, Math.floor(dimensions.height / height));
    return [
      Math.floor(Math.random() * maxX),
      Math.floor(Math.random() * maxY),
    ];
  }, [dimensions.width, dimensions.height, width, height]);

  // Initial squares
  const [squares, setSquares] = useState(() =>
    Array.from({ length: numSquares }, (_, i) => ({
      id: i,
      pos: [0, 0],
      delay: Math.random() * duration,
      duration: duration * (0.8 + Math.random() * 0.4),
    }))
  );

  // Measure container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({
          width: rect.width || window.innerWidth,
          height: rect.height || window.innerHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Update positions once dimensions are available
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      setSquares((prev) =>
        prev.map((sq) => ({
          ...sq,
          pos: getPos(),
        }))
      );
    }
  }, [dimensions, getPos]);

  // Periodically randomly relocate some squares so the pattern feels alive
  useEffect(() => {
    if (dimensions.width === 0) return;

    const interval = setInterval(() => {
      setSquares((prev) => {
        const updated = [...prev];
        const randomIdx = Math.floor(Math.random() * updated.length);
        updated[randomIdx] = {
          ...updated[randomIdx],
          pos: getPos(),
        };
        return updated;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [dimensions, getPos]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={`animated-grid-svg ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
            className="grid-path-line"
          />
        </pattern>
      </defs>

      {/* Grid Mesh */}
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* Pulsing Highlight Squares */}
      <svg x={x} y={y} className="overflow-visible">
        {squares.map((sq) => (
          <rect
            key={sq.id}
            width={width - 1}
            height={height - 1}
            x={sq.pos[0] * width + 1}
            y={sq.pos[1] * height + 1}
            className="animated-grid-square"
            style={{
              animationDuration: `${sq.duration}s`,
              animationDelay: `${sq.delay}s`,
              '--max-opacity': maxOpacity,
            }}
          />
        ))}
      </svg>
    </svg>
  );
}
