import fetchMock from "fetch-mock";
import mockStore from "../redux-mock-store";
import { fetchStore } from "../../store/actions/fetchStore";
import {
  STORE_LIST_START,
  STORE_LIST_SUCCESS
} from "../../store/actions/actionTypes";

const dataApi = [
  { id: 1, name: "Anton Store" },
  { id: 2, name: "Vals store" },
  { id: 3, name: "Pizza Time" },
  { id: 4, name: "generic-pizza-place" },
  { id: 5, name: "mir" },
  { id: 6, name: "Anna Store" },
  { id: 7, name: "yakubiv" },
  { id: 8, name: "ermondel" },
  { id: 9, name: "pizza.shop" },
  { id: 10, name: "Splinter Pizza" },
  { id: 11, name: "NinzjaPizza" },
  { id: 12, name: "mokh" },
  { id: 13, name: "storepizzaapp" },
  { id: 14, name: "Lira" },
  { id: 15, name: "SerafimPoch" },
  { id: 16, name: "Pizza Fantasy" },
  { id: 17, name: "Pizzeria" },
  { id: 18, name: "Vinnitsa-megamoll-pizza" },
  { id: 19, name: "PizzaClub" },
  { id: 20, name: "Andrews Store" }
];

describe("actions fetch list", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates STORE_LIST_SUCCESS when fetching has been done", () => {
    fetchMock.getOnce("https://pizza-tele.ga/api/v1/store/list", {
      body: dataApi
    });

    const expectedAction = [
      { type: STORE_LIST_START },
      {
        type: STORE_LIST_SUCCESS,
        payload: dataApi
      }
    ];

    const store = mockStore({ storeList: [] });

    return store.dispatch(fetchStore()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
