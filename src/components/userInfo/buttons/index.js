import React from "react";
import PizzaList from "./pizzaList";
import LogOut from "./logout";
import { ButtonContainer } from "./style";

export default () => {
  return (
    <ButtonContainer>
      <PizzaList />
      <LogOut />
    </ButtonContainer>
  );
};
