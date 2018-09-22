import reducer from "../../store/reducers/userInfo";
import * as types from "../../store/actions/actionTypes";

const dataUserInfo = {
  username: "Darkenmag",
  uuid: "7ede8195-bd7c-4552-8b1e-16393fa7b310",
  email: "serpochapinsky@gmail.com",
  created_at: "2018-03-29T11:41:50.876Z",
  last_login: "2018-09-22T14:55:12.688617Z"
};

describe("userInfo reducer", () => {
  it("should return the inital state", () => {
    expect(reducer({}, {})).toEqual({});
  });

  it("should handle USER_INFO_SUCCESS", () => {
    expect(
      reducer(
        {},
        {
          type: types.USER_INFO_SUCCESS,
          payload: dataUserInfo
        }
      )
    ).toEqual(dataUserInfo);
  });
});
