import React from 'react';
import './ResultContainer.css';
import placeholder from '../../resources/placeholder-image.png';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ResultContainer = () => (
  <div className="result-container">
    <h2>YOUR RESULT</h2>
    <div className="result-display">
      <p className="gif-name">example</p>
      <img src={placeholder} alt="Placeholder for GIF results" className="gif-display"/>
      <button type="submit">Like</button>
    </div>
    <Slider />
  </div>
);

export default ResultContainer;