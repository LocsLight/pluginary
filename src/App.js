import './App.css';
import Home from './pages/Home'
import InfoSection from './pages/Home/InfoSection'
import {homeObjOne} from './pages/Home/InfoSection/Data.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Home/>
        <InfoSection {...homeObjOne}/>
        <Switch>
          <Route path='/'/>
        </Switch>
    </Router>
  );
}

export default App;
