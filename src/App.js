import './App.css';
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';
import ResultContainer from './components/ResultContainer/ResultContainer';
import LikedContainer from './components/LikedContainer/LikedContainer';
import Selectioncontainer from './components/SelectionContainer/SelectionContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContainer />
      <ResultContainer />
      <LikedContainer />
    </div>
  );
}

export default App;
