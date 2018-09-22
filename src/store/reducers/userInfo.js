import { USER_INFO_SUCCESS } from "../actions/actionTypes";

const init = {};

export default (state = init, { type, payload }) => {
  switch (type) {
    case USER_INFO_SUCCESS:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
