import { CartActionTypes as Type } from '../../utils/constants';

export const toggleHideCartPopup = () => ({
    type: Type.TOGGLE_HIDE_CARTPOPUP
}); 

export const addItemToCart = item => ({
    type: Type.ADD_ITEM,
    payload: item   // new added item
});