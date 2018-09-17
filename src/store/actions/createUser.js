import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "./actionTypes";
import { createUserApi } from "../../services/api/";

const createUserStart = () => ({ type: CREATE_USER_START });

const createUserSuccess = data => ({
  type: CREATE_USER_SUCCESS,
  payload: data
});

const createUserFailure = error => ({
  type: CREATE_USER_FAILURE,
  payload: error
});

export const createUser = userData => dispatch => {
  dispatch(createUserStart);
  return createUserApi(userData)
    .then(data => dispatch(createUserSuccess(data)))
    .catch(error => dispatch(createUserFailure(error)));
};
