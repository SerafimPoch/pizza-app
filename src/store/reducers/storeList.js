import { STORE_LIST_SUCCESS } from "../actions/actionTypes";

const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case STORE_LIST_SUCCESS:
      return [...state, ...payload];
    default:
      return state;
  }
};
