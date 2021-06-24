import './App.css';
import Home from './pages/Home'
//import InfoSection from './pages/Home/InfoSection'
import InfoSection from './components/InfoSection'
import ServicesSection from './components/ServicesSection'
import {homeObjOne, homeObjOne2, homeObjOne3} from './pages/Home/InfoSection/Data.js'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Home/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjOne2}/>
        <InfoSection {...homeObjOne3}/>
        <ServicesSection/>
    </Router>
  );
}

export default App;
