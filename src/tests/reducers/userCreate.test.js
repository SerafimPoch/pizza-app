import reducer from "../../store/reducers/userCreate";
import * as types from "../../store/actions/actionTypes";

const dataUserCreate = {
  success: true,
  uuid: "2bf2ac6e-6f1f-4735-8ea6-0b8bdd48fc39"
};

describe("userCreate reducer", () => {
  it("should return the initial state", () => {
    expect(reducer([], {})).toEqual([]);
  });

  it("should handle CREATE_USER_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.CREATE_USER_SUCCESS,
        payload: dataUserCreate
      })
    ).toEqual(dataUserCreate);
  });
});
