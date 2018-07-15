import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "./actionTypes";
import { post } from "../../services/api/methods";

export const createUser = userData => async dispatch => {
  dispatch({ type: CREATE_USER_START });
  try {
    const data = await post(userData);
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAILURE,
      payload: error,
      error: true
    });
  }
};
