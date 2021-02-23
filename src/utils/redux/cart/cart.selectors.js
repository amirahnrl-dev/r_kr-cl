import { createStore } from 'redux';
import { createSelector } from 'reselect';

// input selector
const selectCart = state => state.cart;

// output selector (memoized selector)
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, cartItem) => (
            acc + cartItem.quantity
        ), 
        0
    )
);