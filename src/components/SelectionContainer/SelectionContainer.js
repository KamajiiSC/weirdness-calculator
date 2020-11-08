import React, { Component } from 'react';
import './SelectionContainer.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ResultContainer from '../ResultContainer/ResultContainer';



export default class SelectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifUrl:"https://api.giphy.com/v1/gifs/translate?api_key=22yty9FIPGbEixUWW3U9UpR9QzOx1iCK&s=Hello"
    };
  }

  getGif = () => {
    fetch(this.state.gifUrl)
      .then(response => response.json())
      .then(data => console.log(data.data.embed_url))
  }

  render(){
    return(
      <div className="selection-container">
        <SearchContainer getGif={this.getGif} />
        <hr className="selection-divider" />
        <ResultContainer />
      </div>
    )
  }
}
