import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import HomePage from './home/home.page';
import ShopPage from './shop/shop.page';
import Header from './header/header';
import SignIn from './signin/signin.page';
import SignUp from './signup/signup.page';
import { auth, createUserDoc as createUser } from './utils/firebase';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component { 
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      //this.setState({ currentUser: user });
      //console.log(user);

      if (user) {
        const userRef = await createUser(user);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route path="/shop" component={ ShopPage } />
          <Route path="/signin" render={ () => 
            this.props.currentUser ? 
            <Redirect to="/" /> : 
            <SignIn />
          } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
