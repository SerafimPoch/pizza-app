import fetchMock from "fetch-mock";
import mockStore from "../redux-mock-store";
import { createUser } from "../../store/actions/createUser";
import {
  CREATE_USER_START,
  CREATE_USER_SUCCESS
} from "../../store/actions/actionTypes";

const dataApi = {
  username: "lempiy",
  password: "secret42",
  password_repeat: "secret42",
  email: "lempiy@gmail.com",
  store_id: 1,
  store_password: "q1w2e3r4"
};

describe("actions user create", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates new user", () => {
    fetchMock.post("https://pizza-tele.ga/api/v1/user/create", {
      body: dataApi
    });

    const expectedAction = [
      {
        type: CREATE_USER_SUCCESS,
        payload: dataApi
      }
    ];

    const store = mockStore({ userCreate: [] });

    return store.dispatch(createUser()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
