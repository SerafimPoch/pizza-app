import { USER_INFO_SUCCESS } from "../actions/actionTypes";

const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case USER_INFO_SUCCESS:
      return payload;
    default:
      return state;
  }
};
