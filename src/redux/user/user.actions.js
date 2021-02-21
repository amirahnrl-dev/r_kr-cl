import { connect } from 'react-redux';
import * as Type from '../../utils/constants';

export const setCurrentUser = user => ({
    type: Type.UserActionTypes.SET_CURRENT_USER,
    payload: user
});