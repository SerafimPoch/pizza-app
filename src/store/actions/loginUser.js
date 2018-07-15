import { postLogin } from "../../services/api/methods";
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CLEAN_LOGIN_USER
} from "./actionTypes";

export const loginUser = userData => async dispatch => {
  dispatch({ type: LOGIN_USER_START });

  try {
    const data = await postLogin(userData);

    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: error,
      error: true
    });
  }
};

export const cleanLogin = () => ({
  type: CLEAN_LOGIN_USER
});
