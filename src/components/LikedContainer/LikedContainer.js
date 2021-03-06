import React, { useEffect, useState } from 'react';
import './LikedContainer.css';
import placeholder from '../../resources/placeholder-image.png';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeLike } from '../../actions';

const LikedContainer = () => {
  const dispatch = useDispatch();
  const likes = useSelector(state => state.likedGifs);
  // States for each gif
  const [firstGif, setFirst] = useState(likes[0]);
  const [secondGif, setSecond] = useState(likes[1]);
  const [thirdGif, setThird] = useState(likes[2]);
  const [fourthGif, setFourth] = useState(likes[3]);
  const [remaining, setRemaining] = useState(5 - likes.length)
  // Names for each gif
  const [firstName, setFirstName] = useState("example");
  const [secondName, setSecondName] = useState("example");
  const [thirdName, setThirdName] = useState("example");
  const [fourthName, setFourthName] = useState("example");

  // Each useEffect tries to set state to url, base likedGifs array is empty so if it is empty it throws an error and returns the empty object instead of throwing an error for calling url that doesnt exist. Runs on state update.
  useEffect(() => {
    try{setFirst(likes[0].url)}
    catch(err) {
      setFirst(likes[0])
    }
    console.log(likes[0])
  }, [likes])

  useEffect(() => {
    try{setSecond(likes[1].url)}
    catch(err) {
      setSecond(likes[1])
    }
    console.log(likes[1])
  }, [likes])

  useEffect(() => {
    try{setThird(likes[2].url)}
    catch(err) {
      setThird(likes[2])
    }
    console.log(likes[2])
  }, [likes])

  useEffect(() => {
    try{setFourth(likes[3].url)}
    catch(err) {
      setFourth(likes[3])
    }
    console.log(likes[3])
  }, [likes])

  useEffect(() => {
    setRemaining(5 - likes.length)
  }, [likes])

  // Name useEffects
  useEffect(() => {
    try{setFirstName(likes[0].name)}
    catch(err) {
      setFirstName("example")
    }
    console.log(likes[0])
  }, [likes])

  useEffect(() => {
    try{setSecondName(likes[1].name)}
    catch(err) {
      setSecondName("example")
    }
    console.log(likes[1])
  }, [likes])

  useEffect(() => {
    try{setThirdName(likes[2].name)}
    catch(err) {
      setThirdName("example")
    }
    console.log(likes[2])
  }, [likes])

  useEffect(() => {
    try{setFourthName(likes[3].name)}
    catch(err) {
      setFourthName("example")
    }
    console.log(likes[3])
  }, [likes])

  return(
    <div className="liked-layout-container">
      <div className="liked-container">
        <h2>YOUR LIKED GIFS</h2>
        <div className="liked-list">
          <div className="liked-list-item"> <p>{firstName || "example"}</p> <button onClick={() => dispatch(removeLike(0))} className="close-icon"></button><img src={firstGif || placeholder} alt="Place holder for selected GIFs"/> </div>
          <div className="liked-list-item"> <p>{secondName || "example"}</p> <button onClick={() => dispatch(removeLike(1))} className="close-icon"></button> <img src={secondGif || placeholder} alt="Place holder for selected GIFs"/></div>
          <div className="liked-list-item"> <p>{thirdName || "example"}</p> <button onClick={() => dispatch(removeLike(2))} className="close-icon"></button> <img src={thirdGif || placeholder} alt="Place holder for selected GIFs"/></div>
          <div className="liked-list-item"> <p>{fourthName || "example"}</p> <button onClick={() => dispatch(removeLike(3))} className="close-icon"></button> <img src={fourthGif || placeholder} alt="Place holder for selected GIFs"/></div>
        </div>
        <div className="calc-btn-desc">
          <Link to="/results"><button disabled={remaining > 0} >CALCULATE MY WEIRDNESS SCORE</button></Link>
          <p>You must <em>Like</em> {remaining} more GIFs to calculate your score</p>
        </div>
      </div>
    </div>
  )
};  

export default LikedContainer;