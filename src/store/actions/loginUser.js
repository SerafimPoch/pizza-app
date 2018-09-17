import { postLogin } from "../../services/api/methods";
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE
} from "./actionTypes";

const loginUserStart = () => ({ type: LOGIN_USER_START });

const loginUserSuccess = data => ({ type: LOGIN_USER_SUCCESS, payload: data });

const loginUserFailure = error => ({
  type: LOGIN_USER_FAILURE,
  payload: error
});

export const loginUser = userData => dispatch => {
  dispatch(loginUserStart());
  return postLogin(userData)
    .then(data => dispatch(loginUserSuccess(data)))
    .catch(error => dispatch(loginUserFailure(error)));
};
