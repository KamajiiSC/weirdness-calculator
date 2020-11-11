import React, { Component } from 'react';
import './SearchContainer.css';

export default class SearchContainer extends Component {

  // Handles the form and its data after submit, grabs input value and passes upstream to setSearch
  handleSubmit = (e) =>{
    this.props.setSearch(e.target.firstChild.value)

    e.preventDefault();
  }

  render() {
    return(
      <div className="search-container">
        <section className="description">
          <p className="desc-section-one">
            Find out how weird you are by selecting the GIFs that make you laugh. 
            We'll show you the least weird ones to start, but you can move the slider to make them weirder.
          </p>
          <p className="desc-section-two">
            When you find a GIF you like, press the <em>Like</em> button. Once you like 5 GIFs we'll show you how weird you are.
          </p>
        </section>

        <section className="search">
          <label htmlFor="search-bar">Search term</label>
          <form onSubmit={this.handleSubmit} className="input-and-btn">
            <input required type="text" id="search-bar"/>
            <button id="search-button">Search</button>
          </form>
        </section>
      </div>
    )
  }
};