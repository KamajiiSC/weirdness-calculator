import './App.css';
import Header from './components/Header/Header';
import LikedContainer from './components/LikedContainer/LikedContainer';
import SelectionContainer from './components/SelectionContainer/SelectionContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SelectionContainer />
        <LikedContainer />
      </main>
    </div>
  );
}

export default App;
