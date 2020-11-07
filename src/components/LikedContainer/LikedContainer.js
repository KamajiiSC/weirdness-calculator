import React from 'react';
import './LikedContainer.css';

const LikedContainer = () => (
  <div className="liked-container">
    <h2>YOUR LIKED GIFS</h2>
    <div className="liked-list">

    </div>
    <div className="calc-btn-desc">
      <button>CALCULATE MY WEIRDNESS SCORE</button>
      <p>You must like x more GIFs to calculate your score</p>
    </div>
  </div>
);  

export default LikedContainer;