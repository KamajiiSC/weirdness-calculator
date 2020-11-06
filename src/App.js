import './App.css';
import Header from './components/Header/Header';
import SearchContainer from './components/SearchContainer/SearchContainer';
import ResultContainer from './components/ResultContainer/ResultContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchContainer />
      <ResultContainer />
    </div>
  );
}

export default App;
