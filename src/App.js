import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './home/home.page';
import ShopPage from './shop/shop.page';
import Header from './header/header';
import SignIn from './signin/signin.page';
import { auth, createUserDoc as createUser } from './firebase/api';

class App extends Component { 
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      //this.setState({ currentUser: user });
      //console.log(user);

      if (user) {
        const userRef = await createUser(user);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot.data());

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            // make sure setState is done before this console.log
            //console.log(this.state);
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser }/>
        
        <Switch>
          <Route path="/shop" component={ ShopPage } />
          <Route path="/signin" component={ SignIn } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </div>
    );
  }
}

export default App;
