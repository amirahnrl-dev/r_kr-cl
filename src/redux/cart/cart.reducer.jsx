import  { CartActionTypes as Type } from '../../utils/constants';

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Type.TOGGLE_HIDE_CARTPOPUP:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;