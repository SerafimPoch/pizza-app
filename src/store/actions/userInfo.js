import { userInfo } from "../../services/api/";
import {
  USER_INFO_START,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE
} from "./actionTypes";

const userInfoStart = () => ({ type: USER_INFO_START });

const userInfoSuccess = data => ({ type: USER_INFO_SUCCESS, payload: data });

const userInfoFailure = error => ({ type: USER_INFO_FAILURE, payload: error });

export const userInf = () => dispatch => {
  dispatch(userInfoStart());
  return userInfo()
    .then(data => dispatch(userInfoSuccess(data)))
    .catch(error => dispatch(userInfoFailure(error)));
};
