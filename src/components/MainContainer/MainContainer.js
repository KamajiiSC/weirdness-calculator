import React, { Component } from 'react';
import './MainContainer.css';
import LikedContainer from '../LikedContainer/LikedContainer';
import SelectionContainer from '../SelectionContainer/SelectionContainer';

export default class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      likes: []
    }
  };
  
  render(){
    return(
      <main>
        <SelectionContainer />
        <LikedContainer />
      </main>
    )
  }
}