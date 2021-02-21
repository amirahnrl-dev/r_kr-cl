import { UserActionTypes as Type } from '../../constants';

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Type.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;