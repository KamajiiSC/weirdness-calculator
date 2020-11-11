import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import ResultsPage from './components/ResultsPage/ResultsPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainContainer />
          </Route>
          
          <Route path="/results">
            <ResultsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
