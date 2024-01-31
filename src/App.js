import React, { useState, useEffect} from 'react';
import Square from './components/square';
import Circle from './components/circle';
import Point from './components/point';
import InputComponent from './components/input';
import './App.css';
import Button2 from './components/button2';

function App() {
  const size = 400;
  const [points, setPoints] = useState([]);
  const [numPoints, setNumPoints] = useState(0);
 



  // const generatePoints = () => {
  //   const generatedPoints = [];
  //   // Logic to generate numPoints points
  //   for (let i = 0; i < numPoints; i++) {
  //     const x = Math.random() * size;
  //     const y = Math.random() * size;
  //     // Check if the point lies inside the circle
  //     const insideCircle = isInsideCircle(x, y, size);
  //     generatedPoints.push({ x, y, insideCircle });
  //   }
  //   console.log('Generated Points:', generatedPoints);
  //   setPoints(generatedPoints);
  // };


  const generatePoints = () => {
    const generatedPoints = [];
    let pointIndex = 0;
  
    const generatePointInterval = setInterval(() => {
      if (pointIndex < numPoints) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const insideCircle = isInsideCircle(x, y, size);
        generatedPoints.push({ x, y, insideCircle });
        setPoints([...generatedPoints]); 
        pointIndex++;
      } else {
        clearInterval(generatePointInterval); // Stop interval when all points are generated
      }
    }, 20); 
  };










  const handleStartSimulation = () => {
    console.log("hello");
    const parsedNumPoints = parseInt(numPoints, 10);
  if (!isNaN(parsedNumPoints) && parsedNumPoints > 0) {
    setNumPoints(parsedNumPoints); 
   
    generatePoints();
  } else {
    alert('Please enter a valid number of points.');
  }
  };


const stopSimulation = () => {
 
    setPoints([]);
    setNumPoints('');
  };

  const isInsideCircle = (x, y) => {
    const radius = size / 2;
    const centerX = size / 2;
    const centerY = size / 2;
    const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    return distance <= radius;
  };

  return (
    <div className='container'>
      <InputComponent 
        label="Number of Points:"
        placeholder="Enter number of points"
        onChange={(value) => setNumPoints(value) }
      />
      <svg width={size} height={size}>
        <Square size={size} />
        <Circle size={size} />
        {points.map(({ x, y, insideCircle }, index) => (
          <Point key={index} x={x} y={y} size={size} color={insideCircle ? 'red' : 'blue'}/>
        ))}
      </svg>
      <div class="buttonss">
      <button text="Start Simulation" onClick={handleStartSimulation}  >Start Simulation</button>
      <button text="Stop Simulation" onClick={stopSimulation} >Clear </button>
      </div>
    </div>
  );
}

export default App;
