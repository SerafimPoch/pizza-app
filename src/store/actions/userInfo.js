import api from '../../services/api';
import {
  USER_INFO_START,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE
} from './actionTypes';

const userInfoStart = () => ({ type: USER_INFO_START });

const userInfoSuccess = data => ({ type: USER_INFO_SUCCESS, payload: data });

const userInfoFailure = error => ({ type: USER_INFO_FAILURE, payload: error });

export const userInf = () => async dispatch => {
  dispatch(userInfoStart());

  try {
    const data = await api.userInfo();
    dispatch(userInfoSuccess(data));
  } catch (err) {
    dispatch(userInfoFailure(err));
  }
};
