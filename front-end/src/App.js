import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import components
import MyNavbar from './components/MyNavbar';

// import pages
import Home from './pages/Home';
import Login from "./pages/Login";
import Member from "./pages/Member";
import MyProfile from "./pages/MyProfile";
import PcRoom from "./pages/PcRoom";

function App() {
  return (
    <Router>
      <MyNavbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="me">
          <MyProfile/>
        </Route>
        <Route path="/member">
          <Member/>
        </Route>
        <Route path="/pcroom">
          <PcRoom/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
