import fetchMock from "fetch-mock";
import mockStore from "../redux-mock-store";
import { fetchStore } from "../../store/actions/fetchStore";
import {
  STORE_LIST_START,
  STORE_LIST_SUCCESS
} from "../../store/actions/actionTypes";

describe("actions fetch list", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates STORE_LIST_SUCCESS when fetching todos has been done", () => {
    fetchMock.getOnce("/todos", {
      body: { dark: 1 },
      headers: { "content-type": "application/json" }
    });

    const expectedAction = [
      { type: STORE_LIST_START },
      {
        type: STORE_LIST_SUCCESS,
        payload: { dark: 1 }
      }
    ];

    const store = mockStore({ storeList: [] });

    return store.dispatch(fetchStore()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
