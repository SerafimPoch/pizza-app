import api from '../../services/api';
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from './actionTypes';

const createUserStart = () => ({ type: CREATE_USER_START });

const createUserSuccess = data => ({
  type: CREATE_USER_SUCCESS,
  payload: data
});

const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  payload: error
});

export const createUser = userData => async dispatch => {
  dispatch(createUserStart);

  try {
    const data = await api.createUser(userData);
    dispatch(createUserSuccess(data));
  } catch (err) {
    dispatch(createUserFailure(err));
  }
};
