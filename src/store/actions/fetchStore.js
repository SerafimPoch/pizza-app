import { getStore } from "../../services/api/";
import {
  STORE_LIST_START,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAILURE
} from "./actionTypes";

export const fetchStore = () => async dispatch => {
  dispatch({ type: STORE_LIST_START });
  try {
    const data = await getStore();
    dispatch({
      type: STORE_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: STORE_LIST_FAILURE,
      payload: error,
      error: true
    });
  }
};
