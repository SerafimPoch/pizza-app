import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import storeList from "./storeList";
import userCreate from "./userCreate";
import loginUser from "./loginUser";
import userInfo from "./userInfo";

export default combineReducers({
  routing: routerReducer,
  storeList,
  userCreate,
  loginUser,
  userInfo,
  form: formReducer
});
