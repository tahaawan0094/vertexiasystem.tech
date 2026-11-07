import React, { useState, useEffect } from 'react';
import './SubHeader.css';

export default function SubHeader() {
  const [pakistanTime, setPakistanTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Karachi',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
        setPakistanTime(timeString);
      } catch (e) {
        setPakistanTime('15:15');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="subheader-bar">
      {/* Left indicator */}
      <div className="subheader-item subheader-left">
        <span className="mono-badge">[01]</span>
        <span className="mono-text">SOFTWARE DEVELOPMENT STUDIO</span>
      </div>

      {/* Middle status beacon */}
      <div className="subheader-item subheader-center">
        <span className="beacon-square"></span>
        <span className="mono-text bold">NOW BOOKING Q4 BUILDS</span>
        <span className="separator">·</span>
        <span className="mono-text">2 SLOTS LEFT</span>
      </div>

      {/* Right location & time */}
      <div className="subheader-item subheader-right">
        <span className="mono-text">PAKISTAN —</span>
        <span className="mono-text time-val">{pakistanTime || '15:15'}</span>
      </div>
    </div>
  );
}