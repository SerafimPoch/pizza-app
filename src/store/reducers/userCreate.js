import { CREATE_USER_SUCCESS } from "../actions/actionTypes";

const init = [];

export default (state = init, { type, payload }) => {
  switch (type) {
    case CREATE_USER_SUCCESS:
      return payload;
    default:
      return state;
  }
};
