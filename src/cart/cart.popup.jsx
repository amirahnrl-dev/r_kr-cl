import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './cart.popup.scss';
import Button from '../utils/button/button';
import CartItem from './cart.item';
import { selectCartItems } from '../utils/redux/cart/cart.selectors'

const CartPopup = ({ cartItems }) => (
    <div className="cart-popup">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                        <CartItem key={ cartItem.id } item={cartItem} />
                    )
                )
            }
        </div>
        <Button>CHECKOUT</Button>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartPopup);