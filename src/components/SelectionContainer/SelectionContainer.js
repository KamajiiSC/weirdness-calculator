import React, { Component } from 'react';
import './SelectionContainer.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ResultContainer from '../ResultContainer/ResultContainer';



export default class SelectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Url to fetch request from API
      gifUrl:"https://api.giphy.com/v1/gifs/translate?api_key=22yty9FIPGbEixUWW3U9UpR9QzOx1iCK&" + "s=example",

      // Url to embed into page of GIF
      returnGif: ""
    };
  }

  setSearch = (newSearch) => {
    this.setState({
      // Set new api request url s=newsearchterm
      gifUrl: "https://api.giphy.com/v1/gifs/translate?api_key=22yty9FIPGbEixUWW3U9UpR9QzOx1iCK&" + `s=${newSearch}`,

    }, // setState is async so only after state is set, run this function that then runs getGif 
    () => {
      this.getGif()
    } 
    )
  }

  // Function sends fetch request to gifUrl then sets returnGif to the downsized_large url for the returned gif, downsized urls evade cors errors
  getGif = () => {
    fetch(this.state.gifUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ returnGif: data.data.images.downsized_large.url});
        console.log(data)
        console.log(this.state.gifUrl)
        })
  }

  render(){
    return(
      <div className="selection-container">
        <SearchContainer setSearch={this.setSearch} />
        <hr className="selection-divider" />
        <ResultContainer returnGif={this.state.returnGif}/>
      </div>
    )
  }
}
