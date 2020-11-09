import React, { Component } from 'react';
import './SearchContainer.css';

export default class SearchContainer extends Component {


  render() {
    return(
      <div className="search-container">
        <section className="description">
          <p className="desc-section-one">
            Find out how weird you are by selecting the GIFs that make you laugh. 
            We'll show you the least weird ones to start, but you can move the slider to make them weirder.
          </p>
          <p className="desc-section-two">
            When you find a GIF you like, press the Like button. Once you like 5 GIFs we'll show you how weird you are.
          </p>
        </section>

        <section className="search">
          <label htmlFor="search-bar">Search term</label>
          <div className="input-and-btn">
            <input type="text" id="search-bar"/>
            <button onClick={this.props.getGif} id="search-button">Search</button>
          </div>
        </section>
      </div>
    )
  }
};