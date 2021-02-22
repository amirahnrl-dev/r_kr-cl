import React from 'react';
import { ReactComponent as Icon } from '../assets/shopping-bag.svg';
import './cart.icon.scss';
import { connect } from 'react-redux';
import { toggleHideCartPopup } from '../utils/redux/cart/cart.actions';

const CartIcon = ({ toggleHideCartPopup, itemCount }) => (
    <div className="cart-icon" onClick={ toggleHideCartPopup }>
        <Icon className="icon" />
        <span className="item-count">{ itemCount }</span>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((acc, cartItem) => (
            acc + cartItem.quantity
        ), 
        0   // starting from
    )
});

const mapDispatchToProps = dispatch => ({
    toggleHideCartPopup: () => dispatch(toggleHideCartPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);