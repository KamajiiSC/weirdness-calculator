import React, { Component } from 'react';
import './SelectionContainer.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ResultContainer from '../ResultContainer/ResultContainer';



export default class SelectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Search term for url
      search: '',

      // Weirdness for url
      weirdness: 0,
      
      // Url to fetch request from API
      gifUrl:"https://api.giphy.com/v1/gifs/translate?api_key=22yty9FIPGbEixUWW3U9UpR9QzOx1iCK&" + "s=example",

      // Url to embed into page of GIF
      returnGif: "",
      
      // Name of GIF
      name: ""
    };
  }

  // Sets weirdness in state when slider calls function
  setWeirdness = (weirdness) => {
    this.setState({
      // Save weirdness in state
      weirdness: weirdness,
      // Set new api request url weirdness=new weirdness score
      gifUrl: "https://api.giphy.com/v1/gifs/translate?api_key=22yty9FIPGbEixUWW3U9UpR9QzOx1iCK&" + `s=${this.state.search || "example"}` + `&weirdness=${weirdness}`,
    },
    () => {
      this.getGif();
      console.log(this.state.gifUrl)
    }
    )
  }

  setSearch = (newSearch) => {
    this.setState({
      // Save search term in state
      search: newSearch, 
      // Set new api request url s=new search term
      gifUrl: "https://api.giphy.com/v1/gifs/translate?api_key=22yty9FIPGbEixUWW3U9UpR9QzOx1iCK&" + `s=${newSearch}` + `&weirdness=${this.state.weirdness}`,

    }, // setState is async so only after state is set, run this function that then runs getGif 
    () => {
      this.getGif();
    } 
    )
  }

  // Function sends fetch request to gifUrl then sets returnGif to the downsized_large url for the returned gif, downsized urls evade cors errors
  getGif = () => {
    console.log(this.state.gifUrl)
    fetch(this.state.gifUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // If data is not an empty array then set state 
        if(data !== []){
          this.setState({ returnGif: data.data.images.downsized_large.url});
          this.setState({ name: data.data.title})
          console.log(this.state.name)
        }
        })
  }

  render(){
    return(
      <div className="selection-container">
        <SearchContainer setSearch={this.setSearch} />
        <hr className="selection-divider" />
        <ResultContainer name={this.state.name} weirdness={this.state.weirdness} setWeirdness={this.setWeirdness} returnGif={this.state.returnGif}/>
      </div>
    )
  }
}
