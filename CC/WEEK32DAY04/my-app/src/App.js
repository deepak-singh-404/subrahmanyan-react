import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';

//Components
import About from './components/About'
import Home from './components/Home'

function App() {
  return (<>
    
      <Router>
        <div className="App">
          <Link to="/about">About</Link>
          <Link to="/home">Home</Link>
        </div>
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
      </Router>
   
  </>);
}

export default App;
