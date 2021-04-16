import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss'

import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'

import AppState from './context/AppState'

function App() {
  // const [categories, setCategories] = useState([
  //   'Sports', 'Cinema', 'Science', 'Animals'
  // ]);

  return (
    <Router>
      <div className="wrapper">
        <AppState>
          <Switch>
            <Route path="/" exact component={Home} />										
            <Route path="/admin" component={Admin} />										
            <Route path="/login" component={Login} />										
          </Switch>
        </AppState>
      </div>
    </Router>
  );
}

export default App;
