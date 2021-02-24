import React from 'react';
import { ReactComponent as Icon } from '../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';
import './cart.icon.scss';
import { connect } from 'react-redux';
import { toggleHideCartPopup } from '../utils/redux/cart/cart.actions';
import { selectCartItemsCount as count } from '../utils/redux/cart/cart.selectors';

const CartIcon = ({ toggleHideCartPopup, itemCount }) => (
    <div className="cart-icon" onClick={ toggleHideCartPopup }>
        <Icon className="icon" />
        <span className="item-count">{ itemCount }</span>
    </div>
);

const mapStateToProps = createStructuredSelector ({
    itemCount: count
});

const mapDispatchToProps = dispatch => ({
    toggleHideCartPopup: () => dispatch(toggleHideCartPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);