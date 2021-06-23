import './App.css';
import './style/sb-admin-2.css'
import Login from './components/login/Login.js'
import Registration from './components/registration/Registration';
import Homepage from './components/Homepage/Homepage';
import Contactpage from './components/Contactpage/Contactpage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountPage from './components/account/AccountPage';
<<<<<<< HEAD
import CheckingPage from './components/checkingPage/CheckingPage';

=======
import AdminPage from './components/admins/AdminPage';
>>>>>>> a529c8e655b14e73ad0840590837cd8423f730aa

function App() {
  return (
    <div className="App">
       <Router>
            <Switch>
<<<<<<< HEAD
            <Route path="/checking">
                <CheckingPage />
=======
              <Route path="/" exact>
                <Homepage />
              </Route>
              <Route path="/contact">
                <Contactpage />
>>>>>>> a529c8e655b14e73ad0840590837cd8423f730aa
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/registration">
                <Registration />
              </Route>
              <Route path="/account">
                <AccountPage />
              </Route>
              <Route path="/admin">
                <AdminPage />
              </Route>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
