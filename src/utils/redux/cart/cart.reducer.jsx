import  { CartActionTypes as Type, removeItemFromCart } from '../../constants';
import { addItemToCart } from '../../constants';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Type.TOGGLE_HIDE_CARTPOPUP:
            return ({
                ...state,
                hidden: !state.hidden
            });
        case Type.ADD_ITEM:
            return ({
                ...state,
                        // existing cartItems, payload
                //cartItems: [...state.cartItems, action.payload] // before add multiple
                cartItems: addItemToCart(state.cartItems, action.payload)
            });
        case Type.REMOVE_ITEM:
            return({
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            });
        case Type.CLEAR_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            };
        default:
            return state;
    }
}

export default cartReducer;