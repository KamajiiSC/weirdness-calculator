import React from 'react';
import './ResultContainer.css';
import placeholder from '../../resources/placeholder-image.png';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// Marks underneath slider
const marks = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10
}

const ResultContainer = () => (
  <div className="result-container">
    <h2>YOUR RESULT</h2>
    <div className="result-display">
      <p className="gif-name">example</p>
      <img src={placeholder} alt="Placeholder for GIF results" className="gif-display"/>
      <button type="submit">Like</button>
    </div>
    <Slider min={0} max={10} step={1} marks={marks}/>
  </div>
);

export default ResultContainer;