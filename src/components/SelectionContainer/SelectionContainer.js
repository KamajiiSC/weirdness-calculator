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
      embedUrl: ""
    };
  }

  // Function sends fetch request to gifUrl then sets embedUrl in state to returned embed url
  getGif = () => {
    fetch(this.state.gifUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ embedUrl: data.data.embed_url });
        })
      .then(console.log(this.state.embedUrl))
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
