import React from 'react';

function Circle({ size }) {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size / 2;

  return (
    <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="black" strokeWidth="2" />
  );
}

export default Circle;

