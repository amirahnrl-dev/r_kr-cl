import  { CartActionTypes as Type } from '../../utils/constants';
import { addItemToCart } from '../../utils/constants'

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
        default:
            return state;
    }
}

export default cartReducer;