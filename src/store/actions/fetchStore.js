import api from '../../services/api';
import {
  STORE_LIST_START,
  STORE_LIST_SUCCESS,
  STORE_LIST_FAILURE
} from './actionTypes';

const fetchStoreStart = () => ({ type: STORE_LIST_START });

const fetchStoreSuccess = data => ({ type: STORE_LIST_SUCCESS, payload: data });

const fetchStoreFailure = error => ({
  type: STORE_LIST_FAILURE,
  payload: error
});

export const fetchStore = () => async dispatch => {
  dispatch(fetchStoreStart());

  try {
    const data = await api.getStore();
    dispatch(fetchStoreSuccess(data));
  } catch (err) {
    dispatch(fetchStoreFailure(err));
  }
};
