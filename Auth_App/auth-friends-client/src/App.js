import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Friends from './components/Friends'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </nav>
        <Navigation />
        <Switch>
          <ProtectedRoute path="/friends" component={ Friends } />
          <Route path="/login" component={ LoginForm } />
          <Route component={ LoginForm } />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
