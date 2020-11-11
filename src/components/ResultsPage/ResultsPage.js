import React from 'react';
import './ResultsPage.css';
import { Link } from 'react-router-dom';

const ResultsPage = () => {

  return(
    <div>
      <h2>You scored an out of 10 on the weirdness scale!</h2>
      <h4>The GIFs you liked</h4>
      <div className="liked-list">
          <img src="" alt="Place holder for selected GIFs"/>
          <img src="" alt="Place holder for selected GIFs"/>
          <img src="" alt="Place holder for selected GIFs"/>
          <img src="" alt="Place holder for selected GIFs"/>
      </div>
      <Link to="/"><button>START OVER</button></Link>
    </div>
  )
};

export default ResultsPage;