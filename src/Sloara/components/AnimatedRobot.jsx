import React from 'react';
import './RobotAnimations.css';

export default function AnimatedRobot() {
  return (
    <div className="robot-center">
      <svg width="180" height="260" viewBox="0 0 180 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Body */}
        <ellipse cx="90" cy="170" rx="50" ry="60" fill="none" stroke="#00ffe7" strokeWidth="4" filter="url(#bodyGlow)" />
        {/* Head */}
        <rect x="45" y="40" rx="30" width="90" height="70" fill="none" stroke="#00ffe7" strokeWidth="4" filter="url(#headGlow)" />
        {/* Face */}
        <ellipse cx="75" cy="75" rx="8" ry="8" fill="#00ffe7" className="robot-eye-svg" />
        <ellipse cx="105" cy="75" rx="8" ry="8" fill="#00ffe7" className="robot-eye-svg" />
        <rect x="80" y="95" width="20" height="8" rx="4" fill="#00ffe7" className="robot-mouth-svg" />
        {/* Antenna */}
        <rect x="87" y="20" width="6" height="25" rx="3" fill="#00ffe7" className="robot-antenna-svg" />
        <ellipse cx="90" cy="20" rx="10" ry="10" fill="#00ffe7" filter="url(#antennaGlow)" />
        {/* Arms */}
        <rect x="10" y="120" width="18" height="60" rx="9" fill="#00ffe7" className="robot-arm-svg left" />
        <rect x="152" y="120" width="18" height="60" rx="9" fill="#00ffe7" className="robot-arm-svg right" />
        {/* Legs */}
        <rect x="60" y="220" width="18" height="30" rx="9" fill="#00ffe7" className="robot-leg-svg left" />
        <rect x="102" y="220" width="18" height="30" rx="9" fill="#00ffe7" className="robot-leg-svg right" />
        <defs>
          <filter id="bodyGlow" x="0" y="110" width="180" height="120" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#00ffe7"/>
          </filter>
          <filter id="headGlow" x="25" y="20" width="130" height="110" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="#00ffe7"/>
          </filter>
          <filter id="antennaGlow" x="70" y="0" width="40" height="40" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#00ffe7"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
