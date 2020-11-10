import React, { Component } from 'react';
import './MainContainer.css';
import LikedContainer from '../LikedContainer/LikedContainer';
import SelectionContainer from '../SelectionContainer/SelectionContainer';

export default class MainContainer extends Component {
  render(){
    return(
      <main>
        <SelectionContainer />
        <LikedContainer />
      </main>
    )
  }
}