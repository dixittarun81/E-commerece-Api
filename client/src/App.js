import React from "react";
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';


function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/signin" exact component={Signin}/>
            <Route path="/signup" exact component={Signup}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
