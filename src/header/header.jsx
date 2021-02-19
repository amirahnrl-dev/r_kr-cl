import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/api';
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
                //<Link className="link" to="/signin">SIGNIN</Link>

                currentUser ? 
                <div className="link" onClick={ () => auth.signOut() }>
                    SIGN OUT
                </div> :
                <Link className="link" to="/signin">SIGN IN</Link>
            }
        </nav>
    </div>
);

export default Header;