import React from 'react';
import './SelectionContainer.css';
import SearchContainer from '../SearchContainer/SearchContainer';
import ResultContainer from '../ResultContainer/ResultContainer';

const SelectionContainer = () => (
  <div className="selection-container">
    <SearchContainer />
    <hr className="selection-divider" />
    <ResultContainer />
  </div>
)

export default SelectionContainer;