import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './home/home.page';
import CollectionsPage from './collections/collections.page';

class App extends Component { 
  render() {
    return (
      <div>
        <Switch>
          <Route path="/shop" component= { CollectionsPage } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </div>
    );
  }
}

export default App;
