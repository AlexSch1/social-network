import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import Messenger from "./pages/messanger/Messenger";

function App() {
  const { user } = useContext(AuthContext);

  console.log(user)

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          { user ? <Home /> : <Register/> }
        </Route>
        <Route path="/login">
          { user ? <Redirect to="/" /> : <Login/> }
        </Route>
        <Route path="/register">
          { user ? <Redirect to="/" /> : <Register/> }
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>

        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
