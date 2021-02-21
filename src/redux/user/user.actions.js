import { connect } from 'react-redux';
import * as Constants from '../../utils/constants';

export const setCurrentUser = user => ({
    type: Constants.setCurrentUser,
    payload: user
});