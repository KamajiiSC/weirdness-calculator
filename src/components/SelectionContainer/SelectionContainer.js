import React, { Component } from 'react';
import './SelectionContainer.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ResultContainer from '../ResultContainer/ResultContainer';



export default class SelectionContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){
    return(
      <div className="selection-container">
        <SearchContainer />
        <hr className="selection-divider" />
        <ResultContainer />
      </div>
    )
  }
}
