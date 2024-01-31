

import React from 'react';
import './point.css';
function Point({ x, y, size, insideCircle,color }) {
  return (
    <circle cx={x} cy={y} r="2" fill={color} className='points'/>
  );
}

export default Point;
