import fetchMock from "fetch-mock";
import mockStore from "../redux-mock-store";
import { loginUser } from "../../store/actions/loginUser";
import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS
} from "../../store/actions/actionTypes";

const dataApi = {
  success: true,
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzczMDc3MDYsInVzZXJuYW1lIjoiRGFya2VubWFnIiwidXVpZCI6IjdlZGU4MTk1LWJkN2MtNDU1Mi04YjFlLTE2MzkzZmE3YjMxMCIsImRldmljZV91dWlkIjoiZmQ1MjU1OWEtYWFhMy00NWVjLWIyNGItZGU5MjA0ZWU3ZDkzIiwic3RvcmVfaWQiOjE1fQ.cfZK56WNHYdCvDYMwi2BMagDvcMnVkWr-7tCoDR-aN4"
};

describe("login user", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates STORE_LIST_SUCCESS when fetching has been done", () => {
    fetchMock.post("https://pizza-tele.ga/api/v1/user/login", {
      body: dataApi
    });

    const expectedAction = [
      { type: LOGIN_USER_START },
      {
        type: LOGIN_USER_SUCCESS,
        payload: dataApi
      }
    ];

    const store = mockStore({ loginUser: [] });

    return store.dispatch(loginUser()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
