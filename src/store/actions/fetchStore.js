import { getStore } from "../../services/api/";
import {
  STORE_LIST_START,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAILURE
} from "./actionTypes";

const fetchStoreStart = () => ({ type: STORE_LIST_START });

const fetchStoreSuccess = body => ({ type: STORE_LIST_SUCCESS, payload: body });

const fetchStoreFailure = error => ({
  type: STORE_LIST_FAILURE,
  payload: error
});

export const fetchStore = () => dispatch => {
  dispatch(fetchStoreStart());
  getStore()
    .then(body => dispatch(fetchStoreSuccess(body)))
    .catch(error => dispatch(fetchStoreFailure(error)));
};
