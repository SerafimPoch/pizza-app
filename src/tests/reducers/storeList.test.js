import reducer from "../../store/reducers/storeList";
import * as types from "../../store/actions/actionTypes";

const storeListData = [
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

describe("storeList reducer", () => {
  it("should return the initial state", () => {
    expect(reducer([], {})).toEqual([]);
  });

  it("should handle STORE_LIST_SUCCESS", () => {
    expect(
      reducer([], {
        type: types.STORE_LIST_SUCCESS,
        payload: storeListData
      })
    ).toEqual(storeListData);
  });
});
