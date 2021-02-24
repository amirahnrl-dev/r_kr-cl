import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './header.scss'
import { ReactComponent as Logo } from '../assets/crown.svg';
import CartIcon from '../cart/cart.icon';
import CartPopup from '../cart/cart.popup';
import { selectCartHidden } from '../utils/redux/cart/cart.selectors';
import { selecCurrentUser } from '../utils/redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => {
    const location = useLocation();

    return ( 
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
                    </div> : (location.pathname === "/signin") ?
                    <Link className="link" to="/signup">SIGN UP</Link> :
                    <Link className="link" to="/signin">SIGN IN</Link>
                }
                <CartIcon />
            </nav>
            {
                hidden ? null : <CartPopup />
            }
        </div>
    );
}

                        // state -> rootReducer
const mapStateToProps = createStructuredSelector ({ 
    currentUser: selecCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);