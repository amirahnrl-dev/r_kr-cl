import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../utils/redux/cart/cart.selectors';
import './checkout.page.scss';
import CheckoutItem from './checkout.item';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="header">
            <div className="column">
                <span>Product</span>
            </div>
            <div className="column">
                <span>Description</span>
            </div>
            <div className="column">
                <span>Quantity</span>
            </div>
            <div className="column">
                <span>Price</span>
            </div>
            <div className="column">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item => (
                <CheckoutItem key={ item.id } cartItem={ item } />
            ))
        }
        <div className="total">
            <span>TOTAL: ${ total }</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);