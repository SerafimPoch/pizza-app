import { userInfo } from "../../services/api/";
import {
  USER_INFO_START,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE
} from "./actionTypes";

export const userInf = () => async dispatch => {
  dispatch({ type: USER_INFO_START });
  try {
    const data = await userInfo();
    dispatch({
      type: USER_INFO_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: USER_INFO_FAILURE,
      payload: error,
      error: true
    });
  }
};
