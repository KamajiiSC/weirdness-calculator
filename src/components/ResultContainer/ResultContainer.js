import React, {Component} from 'react';
import './ResultContainer.css';
import placeholder from '../../resources/placeholder-image.png';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

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

export default class ResultContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      returnGif: ""
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.returnGif !== prevProps.returnGif) {
      this.setState({
        returnGif: this.props.returnGif
      })
    }
  }

  render() {
    return(
      <div className="result-container">
        <h2>YOUR RESULT</h2>
        <div className="result-display">
          <p className="gif-name">example</p>
          <img crossOrigin="Anonymous" src={this.state.returnGif || placeholder} alt="Placeholder for GIF results" className="gif-display"/>
          <button type="submit">Like</button>
        </div>
        <div className="slider-container">
          <Slider onChange={this.props.setWeirdness} min={0} max={10} step={1} marks={marks}/>
          <p className="slider-value">Weirdness: 0</p>
        </div>

      </div>
    )
  }
};