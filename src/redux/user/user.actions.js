import { UserActionTypes as Type } from '../../utils/constants';

export const setCurrentUser = user => ({
    type: Type.SET_CURRENT_USER,
    payload: user
});