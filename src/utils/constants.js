export const UserActionTypes = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}

export const CartActionTypes = {
    TOGGLE_HIDE_CARTPOPUP: "TOGGLE_HIDE_CARTPOPUP",
    ADD_ITEM: "ADD_ITEM",
    REMOVE_ITEM: "REMOVE_ITEM",
    CLEAR_ITEM: "CLEAR_ITEM"
}

/* FUNCTIONS */
export const addItemToCart = (cartItems, cartItemsToAdd) => {
    // .find() returns the first item found in array, based on conditions
    const existingCartItem = cartItems.find(cartItem => (
            cartItem.id === cartItemsToAdd.id
        )
    );

    if (existingCartItem) {
        return cartItems.map(cartItem => (
            cartItem.id === cartItemsToAdd.id ? 
            { ...cartItem, quantity: cartItem.quantity + 1 } :
            cartItem
        ));
    } else {
        return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
    }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find (item => (
            item.id === cartItemToRemove.id
        )
    );
  
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => (
            item.id !== cartItemToRemove.id)
        );
    }
  
    return cartItems.map(item =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }