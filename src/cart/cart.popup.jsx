import React from 'react';
import './cart.popup.scss';
import Button from '../utils/button/button';

const CartPopup = () => (
    <div className="cart-popup">
        <div className="cart-items" />
        <Button>CHECKOUT</Button>
    </div>
);

export default CartPopup;