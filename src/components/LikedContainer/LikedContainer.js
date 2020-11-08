import React from 'react';
import './LikedContainer.css';
import placeholder from '../../resources/placeholder-image.png';

const LikedContainer = () => (
  <div className="liked-layout-container">
    <div className="liked-container">
      <h2>YOUR LIKED GIFS</h2>
      <div className="liked-list">
        <img src={placeholder} alt="Place holder for selected GIFs"/>
        <img src={placeholder} alt="Place holder for selected GIFs"/>
        <img src={placeholder} alt="Place holder for selected GIFs"/>
        <img src={placeholder} alt="Place holder for selected GIFs"/>
      </div>
      <div className="calc-btn-desc">
        <button>CALCULATE MY WEIRDNESS SCORE</button>
        <p>You must like x more GIFs to calculate your score</p>
      </div>
    </div>
  </div>
);  

export default LikedContainer;