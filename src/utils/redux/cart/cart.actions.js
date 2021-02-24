import { CartActionTypes as Type } from '../../constants';

export const toggleHideCartPopup = () => ({
    type: Type.TOGGLE_HIDE_CARTPOPUP
}); 

export const addItemToCart = item => ({
    type: Type.ADD_ITEM,
    payload: item   // new added item
});

export const removeItemFromCart = item => ({
    type: Type.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: Type.CLEAR_ITEM,
    payload: item
});