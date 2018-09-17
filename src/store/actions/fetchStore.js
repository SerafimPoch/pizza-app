import { getStore } from "../../services/api/";
import {
  STORE_LIST_START,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAILURE
} from "./actionTypes";

const fetchStoreStart = () => ({ type: STORE_LIST_START });

const fetchStoreSuccess = data => ({ type: STORE_LIST_SUCCESS, payload: data });

const fetchStoreFailure = error => ({
  type: STORE_LIST_FAILURE,
  payload: error
});

export const fetchStore = () => dispatch => {
  dispatch(fetchStoreStart());
  return getStore()
    .then(data => dispatch(fetchStoreSuccess(data)))
    .catch(error => dispatch(fetchStoreFailure(error)));
};
