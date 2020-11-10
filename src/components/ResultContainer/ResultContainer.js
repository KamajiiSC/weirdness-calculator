import React, { useEffect, useState } from 'react';
import './ResultContainer.css';
import placeholder from '../../resources/placeholder-image.png';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch } from 'react-redux';
import { addLike } from '../../actions';

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

const ResultContainer = (props) => {
  const dispatch = useDispatch();
  const [returnGif, setGif] = useState('gif');

  useEffect(() => {
    setGif(props.returnGif);
  });
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     returnGif: ""
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.returnGif !== prevProps.returnGif) {
  //     this.setState({
  //       returnGif: this.props.returnGif
  //     })
  //   }
  // }
  return(
    <div className="result-container">
      <h2>YOUR RESULT</h2>
      <div className="result-display">
        <p className="gif-name">example</p>
        <img crossOrigin="Anonymous" src={returnGif || placeholder} alt="Placeholder for GIF results" className="gif-display"/>
        <button onClick={() => dispatch(addLike())} type="submit">Like</button>
      </div>
      <div className="slider-container">
        <Slider onChange={props.setWeirdness} min={0} max={10} step={1} marks={marks}/>
        <p className="slider-value">Weirdness: {props.weirdness}</p>
      </div>

    </div>
  )
};

export default ResultContainer;