import './App.css';
import './style/sb-admin-2.css'
import Login from './components/login/Login.js'
import Registration from './components/registration/Registration';
import Homepage from './components/Homepage/Homepage';
import Contactpage from './components/Contactpage/Contactpage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Router>
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/contact">
                <Contactpage />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
