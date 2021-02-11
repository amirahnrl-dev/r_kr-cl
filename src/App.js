import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './home/home.page';
import ShopPage from './shop/shop.page';
import Header from './header/header';
import SignIn from './signin/signin.page';

class App extends Component { 
  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route path="/shop" component= { ShopPage } />
          <Route path="/signin" component={ SignIn } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </div>
    );
  }
}

export default App;
