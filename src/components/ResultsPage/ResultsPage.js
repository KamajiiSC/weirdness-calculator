import React, { useEffect, useState } from 'react';
import './ResultsPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { emptyLike } from'../../actions';

const ResultsPage = () => {
  const dispatch = useDispatch();
  const likes = useSelector(state => state.likedGifs);
  
  const [firstGif, setFirst] = useState(likes[0]);
  const [secondGif, setSecond] = useState(likes[1]);
  const [thirdGif, setThird] = useState(likes[2]);
  const [fourthGif, setFourth] = useState(likes[3]);
  const [fifthGif, setFifth] = useState(likes[4]);

  const [firstName, setFirstName] = useState("example");
  const [secondName, setSecondName] = useState("example");
  const [thirdName, setThirdName] = useState("example");
  const [fourthName, setFourthName] = useState("example");
  const [fifthName, setFifthName] = useState("example");

  const [firstWeird, setFirstWeird] = useState(0);
  const [secondWeird, setSecondWeird] = useState(0);
  const [thirdWeird, setThirdWeird] = useState(0);
  const [fourthWeird, setFourthWeird] = useState(0);
  const [fifthWeird, setFifthWeird] = useState(0);

  // Gif Url useEffects
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

  // Name useEffects
  useEffect(() => {
    try{setFirstName(likes[0].name)}
    catch(err) {
      setFirstName("example")
    }
    console.log(likes[0])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setSecondName(likes[1].name)}
    catch(err) {
      setSecondName("example")
    }
    console.log(likes[1])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setThirdName(likes[2].name)}
    catch(err) {
      setThirdName("example")
    }
    console.log(likes[2])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setFourthName(likes[3].name)}
    catch(err) {
      setFourthName("example")
    }
    console.log(likes[3])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setFifthName(likes[4].name)}
    catch(err) {
      setFifthName("example")
    }
    console.log(likes[4])
  }, [useSelector(state => state.likedGifs)])

  // Weirdness useEffects
  useEffect(() => {
    try{setFirstWeird(likes[0].weirdness)}
    catch(err) {
      setFirstWeird(0)
    }
    console.log(likes[0])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setSecondWeird(likes[1].weirdness)}
    catch(err) {
      setSecondWeird(0)
    }
    console.log(likes[1])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setThirdWeird(likes[2].weirdness)}
    catch(err) {
      setThirdWeird(0)
    }
    console.log(likes[2])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setFourthWeird(likes[3].weirdness)}
    catch(err) {
      setFourthWeird(0)
    }
    console.log(likes[3])
  }, [useSelector(state => state.likedGifs)])

  useEffect(() => {
    try{setFifthWeird(likes[4].weirdness)}
    catch(err) {
      setFifthWeird(0)
    }
    console.log(likes[4])
  }, [useSelector(state => state.likedGifs)])

  return(
    <div>
      <h2>You scored a(n) {((firstWeird + secondWeird + thirdWeird + fourthWeird + fifthWeird) / 5)} out of 10 on the weirdness scale!</h2>
      <h4>The GIFs you liked</h4>
      <div className="liked-list-results">
        <div><p>{firstName || "example"}</p><img src={firstGif} alt="Place holder for selected GIFs"/><p>{firstWeird || 0}/10</p></div>
        <div><p>{secondName || "example"}</p><img src={secondGif} alt="Place holder for selected GIFs"/><p>{secondWeird || 0}/10</p></div>
        <div><p>{thirdName || "example"}</p><img src={thirdGif} alt="Place holder for selected GIFs"/><p>{thirdWeird || 0}/10</p></div>
        <div><p>{fourthName || "example"}</p><img src={fourthGif} alt="Place holder for selected GIFs"/><p>{fourthWeird || 0}/10</p></div>
        <div><p>{fifthName || "example"}</p><img src={fifthGif} alt="Place holder for selected GIFs"/><p>{fifthWeird || 0}/10</p></div>       
      </div>
      <Link to="/"><button onClick={() => dispatch(emptyLike())}>START OVER</button></Link>
    </div>
  )
};

export default ResultsPage;