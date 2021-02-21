import React from 'react';
import { ReactComponent as Icon } from '../assets/shopping-bag.svg';
import './cart.icon.scss';
import { connect } from 'react-redux';
import { toggleHideCartPopup } from '../redux/cart/cart.actions';

const CartIcon = ({ toggleHideCartPopup }) => (
    <div className="cart-icon" onClick={ toggleHideCartPopup }>
        <Icon className="icon" />
        <span className="item-count">0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleHideCartPopup: () => dispatch(toggleHideCartPopup())
});

export default connect(null, mapDispatchToProps)(CartIcon);