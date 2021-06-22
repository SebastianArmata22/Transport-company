import './App.css';
import './style/sb-admin-2.css'
import Login from './components/login/Login.js'
import Registration from './components/registration/Registration';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountPage from './components/account/AccountPage';
import AdminPage from './components/admins/AdminPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
