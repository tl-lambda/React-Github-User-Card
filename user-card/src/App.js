import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './components/Users.js';
import Followers from './components/Followers.js';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div class="container">
      <Route exact path="/" component={Users} />
      <Route path="/followers" component={Followers}/>
    </div>
  );
}

export default App;
