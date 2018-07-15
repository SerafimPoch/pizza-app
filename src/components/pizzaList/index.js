import React from "react";
import AddButton from "./addButton";
import PizzaList from "./pizzaBlock";
import { MainContainer } from "./style";

export default () => {
  return (
    <MainContainer>
      <AddButton />
      <PizzaList />
    </MainContainer>
  );
};
