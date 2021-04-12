import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router} from 'react-router-dom';
import InfoSection from './components/InfoSection';
import {homeObjOne} from './components/InfoSection/Data';

function App() {
  return (
    <Router>
     <Home />
     <InfoSection {...homeObjOne}/>
    </Router>
  );
}

export default App;
