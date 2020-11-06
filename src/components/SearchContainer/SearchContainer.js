import React from 'react';
import './SearchContainer.css';

const SearchContainer = () => (
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
      <label htmlFor="searchbar">Search term</label>
      <input type="text" id="searchbar"/>
      <button>Search</button>
    </section>
  </div>
);

export default SearchContainer;