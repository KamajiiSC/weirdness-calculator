import React, { useState } from 'react';
import './ResultsPage.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  const likes = useSelector(state => state.likedGifs);
  const [firstGif, setFirst] = useState(likes[0]);
  const [secondGif, setSecond] = useState(likes[1]);
  const [thirdGif, setThird] = useState(likes[2]);
  const [fourthGif, setFourth] = useState(likes[3]);

  return(
    <div>
      <h2>You scored an out of 10 on the weirdness scale!</h2>
      <h4>The GIFs you liked</h4>
      <div className="liked-list-results">
          <img src="" alt="Place holder for selected GIFs"/>
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