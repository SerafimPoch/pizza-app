import { cleanLogin } from "../../store/actions/cleanLogin";
import { CLEAN_LOGIN_USER } from "../../store/actions/actionTypes";

it("run CLEAN_LOGIN_USER when user quit", () => {
  const expectedAction = {
    type: CLEAN_LOGIN_USER
  };
  expect(cleanLogin()).toEqual(expectedAction);
});
