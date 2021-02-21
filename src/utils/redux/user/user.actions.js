import { UserActionTypes as Type } from '../../constants';

export const setCurrentUser = user => ({
    type: Type.SET_CURRENT_USER,
    payload: user
});