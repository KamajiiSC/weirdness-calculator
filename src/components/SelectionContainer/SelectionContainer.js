import React from 'react';
import './SelectionContainer';
import SearchContainer from '../SearchContainer/SearchContainer';
import ResultContainer from '../ResultContainer/ResultContainer';

const SelectionContainer = () => (
  <div className="selection-container">
    <SearchContainer />
    <ResultContainer />
  </div>
)

export default SelectionContainer;