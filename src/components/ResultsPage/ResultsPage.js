import React, { useEffect, useState } from 'react';
import './ResultsPage.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  const likes = useSelector(state => state.likedGifs);
  const [firstGif, setFirst] = useState(likes[0]);
  const [secondGif, setSecond] = useState(likes[1]);
  const [thirdGif, setThird] = useState(likes[2]);
  const [fourthGif, setFourth] = useState(likes[3]);
  const [fifthGif, setFifth] = useState(likes[4]);

  useEffect(() => {
    try{setFirst(likes[0].url)}
    catch(err) {
      setFirst(likes[0])
    }
    console.log(likes[0])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setSecond(likes[1].url)}
    catch(err) {
      setSecond(likes[1])
    }
    console.log(likes[1])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setThird(likes[2].url)}
    catch(err) {
      setThird(likes[2])
    }
    console.log(likes[2])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setFourth(likes[3].url)}
    catch(err) {
      setFourth(likes[3])
    }
    console.log(likes[3])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setFifth(likes[4].url)}
    catch(err) {
      setFifth(likes[4])
    }
    console.log(likes[4])
  }, [useSelector(state => state.likedGifs)])

  return(
    <div>
      <h2>You scored an out of 10 on the weirdness scale!</h2>
      <h4>The GIFs you liked</h4>
      <div className="liked-list-results">
          <img src={firstGif} alt="Place holder for selected GIFs"/>
          <img src={secondGif} alt="Place holder for selected GIFs"/>
          <img src={thirdGif} alt="Place holder for selected GIFs"/>
          <img src={fourthGif} alt="Place holder for selected GIFs"/>
          <img src={fifthGif} alt="Place holder for selected GIFs"/>
      </div>
      <Link to="/"><button>START OVER</button></Link>
    </div>
  )
};

export default ResultsPage;