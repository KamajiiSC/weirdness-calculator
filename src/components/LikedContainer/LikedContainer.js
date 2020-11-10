import React, { useEffect, useState } from 'react';
import './LikedContainer.css';
import placeholder from '../../resources/placeholder-image.png';
import { useSelector } from 'react-redux';

const LikedContainer = () => {
  const likes = useSelector(state => state.likedGifs);
  // States for each gif
  const [firstGif, setFirst] = useState(likes[0]);
  const [secondGif, setSecond] = useState(likes[1]);
  const [thirdGif, setThird] = useState(likes[2]);
  const [fourthGif, setFourth] = useState(likes[3]);
  const [remaining, setRemaining] = useState(5 - likes.length)

  // Each useEffect tries to set state to url, base likedGifs array is empty so if it is empty it throws an error and returns the empty object instead of throwing an error for calling url that doesnt exist. Runs on state update.
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
    setRemaining(5 - likes.length)
  }, [likes])

  return(
    <div className="liked-layout-container">
      <div className="liked-container">
        <h2>YOUR LIKED GIFS</h2>
        <div className="liked-list">
          <img src={firstGif || placeholder} alt="Place holder for selected GIFs"/>
          <img src={secondGif || placeholder} alt="Place holder for selected GIFs"/>
          <img src={thirdGif || placeholder} alt="Place holder for selected GIFs"/>
          <img src={fourthGif || placeholder} alt="Place holder for selected GIFs"/>
        </div>
        <div className="calc-btn-desc">
          <button>CALCULATE MY WEIRDNESS SCORE</button>
          <p>You must like {remaining} more GIFs to calculate your score</p>
        </div>
      </div>
    </div>
  )
};  

export default LikedContainer;