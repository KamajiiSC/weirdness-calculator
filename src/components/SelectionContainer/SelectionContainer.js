import React, { Component } from 'react';
import './SelectionContainer.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ResultContainer from '../ResultContainer/ResultContainer';



export default class SelectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Url to fetch request from API
      gifUrl:"https://api.giphy.com/v1/gifs/translate?api_key=22yty9FIPGbEixUWW3U9UpR9QzOx1iCK&s=Hello",

      // Url to embed into page of GIF
      returnGif: {}
    };
  }

  // Function sends fetch request to gifUrl then sets embedUrl in state to returned embed url
  getGif = () => {
    fetch(this.state.gifUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ returnGif: data.data});
        })
      .then(console.log("hell"))
  }

  render(){
    return(
      <div className="selection-container">
        <SearchContainer getGif={this.getGif} />
        <hr className="selection-divider" />
        <ResultContainer returnGif={this.state.returnGif}/>
      </div>
    )
  }
}
