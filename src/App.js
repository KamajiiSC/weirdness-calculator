import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
