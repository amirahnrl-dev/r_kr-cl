import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './cart.popup.scss';
import Button from '../utils/button/button';
import CartItem from './cart.item';
import { selectCartItems } from '../utils/redux/cart/cart.selectors';
import { toggleHideCartPopup as hidePopup } from '../utils/redux/cart/cart.actions';

const CartPopup = ({ cartItems, history, dispatch }) => (
    <div className="cart-popup">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => (
                        <CartItem key={ cartItem.id } item={cartItem} />
                    )
                ) :
                <span className="empty-msg">You cart is empty.</span>
            }
        </div>
        <Button onClick={ () => {
                history.push('/checkout');
                dispatch(hidePopup());
            } 
        }>
            CHECKOUT
        </Button>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartPopup));