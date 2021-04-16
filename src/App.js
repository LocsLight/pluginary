import './App.css';
import Home from './pages/Home'
import InfoSection from './pages/Home/InfoSection'
import {homeObjOne} from './pages/Home/InfoSection/Data.js'


function App() {
  return (
    <div className="App">
        <Home/>
        <InfoSection {...homeObjOne}/>
    </div>
  );
}

export default App;
