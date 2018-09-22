import { LOGIN_USER_SUCCESS, CLEAN_LOGIN_USER } from "../actions/actionTypes";

const init = {};

export default (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return payload;
    case CLEAN_LOGIN_USER:
      return {};
    default:
      return state;
  }
};
