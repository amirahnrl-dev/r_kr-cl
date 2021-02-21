import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import './header.scss'
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to ="/">
            <Logo className="logo" />
        </Link>
        <nav>
            <Link className="link" to="/shop">SHOP</Link>
            <Link className="link" to="/contact">CONTACT</Link>
            {
                currentUser ? 
                <div className="link" onClick={ () => auth.signOut() }>
                    SIGN OUT
                </div> : 
                <Link className="link" to="/signup">SIGN UP</Link>
                /*
                <Link className="link" to="/signup">SIGN UP</Link> :
                <Link className="link" to="/signin">SIGN IN</Link>
                */
            }
        </nav>
    </div>
);
                        // state -> rootReducer
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);