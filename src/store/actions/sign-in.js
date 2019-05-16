import api from '../../services/api';
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from './actionTypes';

const signInStart = () => ({ type: LOGIN_USER_START });

const signInSuccess = data => ({ type: LOGIN_USER_SUCCESS, payload: data });

const signInUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error
});

export const signIn = userData => async dispatch => {
  dispatch(signInStart());

  try {
    const data = await api.login(userData);
    dispatch(signInSuccess(data));
  } catch (err) {
    dispatch(signInUserFailure(err));
  }
};
