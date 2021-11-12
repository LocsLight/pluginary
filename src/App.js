import './App.css';
import Home from './pages/Home'
//import InfoSection from './pages/Home/InfoSection'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SigninPage from './pages/Signin'


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component = {Home} exact/>
        <Route path='/signin' component = {SigninPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
