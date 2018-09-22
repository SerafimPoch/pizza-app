import reducer from "../../store/reducers/loginUser";
import * as types from "../../store/actions/actionTypes";

const loginUserData = {
  success: true,
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzc2NDQyMDksInVzZXJuYW1lIjoiRGFya2VubWFnIiwidXVpZCI6IjdlZGU4MTk1LWJkN2MtNDU1Mi04YjFlLTE2MzkzZmE3YjMxMCIsImRldmljZV91dWlkIjoiMDllNzZhY2ItMzRkNS00Y2RkLTgyNDYtZTExMzk1NDNmMzdlIiwic3RvcmVfaWQiOjE1fQ.ckNyuYdsPOdmCxz9oG-fxLSZikzlzx3Ek-e6W2bJs2c"
};

describe("loginUser reducer", () => {
  it("should return the initial state", () => {
    expect(reducer({}, {})).toEqual({});
  });

  it("should handle LOGIN_USER_SUCCESS", () => {
    expect(
      reducer(
        {},
        {
          type: types.LOGIN_USER_SUCCESS,
          payload: loginUserData
        }
      )
    ).toEqual(loginUserData);
  });

  it("should handle CLEAN_LOGIN_USER", () => {
    expect(
      reducer(
        {},
        {
          type: types.CLEAN_LOGIN_USER
        }
      )
    ).toEqual({});
  });
});
