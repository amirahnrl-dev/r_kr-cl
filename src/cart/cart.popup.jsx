import React from 'react';
import { connect } from 'react-redux';
import './cart.popup.scss';
import Button from '../utils/button/button';
import CartItem from './cart.item';

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

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartPopup);