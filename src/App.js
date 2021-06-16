import './App.css';
import Home from './pages/Home'
//import InfoSection from './pages/Home/InfoSection'
import InfoSection from './components/InfoSection'
import {homeObjOne, homeObjOne2} from './pages/Home/InfoSection/Data.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Home/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjOne2}/>
    </Router>
  );
}

export default App;
