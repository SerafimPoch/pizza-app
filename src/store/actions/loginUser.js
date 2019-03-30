import api from '../../services/api';
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from './actionTypes';

const loginUserStart = () => ({ type: LOGIN_USER_START });

const loginUserSuccess = data => ({ type: LOGIN_USER_SUCCESS, payload: data });

const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error
});

export const loginUser = userData => async dispatch => {
  dispatch(loginUserStart());

  try {
    const data = await api.login(userData);
    dispatch(loginUserSuccess(data));
  } catch (err) {
    dispatch(loginUserFailure(err));
  }
};
