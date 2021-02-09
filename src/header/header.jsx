import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss'
import { ReactComponent as Logo } from '../assets/crown.svg';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to ="/">
            <Logo className="logo" />
        </Link>
        <nav>
            <Link className="link" to="/shop">SHOP</Link>
            <Link className="link" to="/contact">CONTACT</Link>
            <Link className="link" to="/signin">SIGNIN</Link>
        </nav>
    </div>
);

export default Header;