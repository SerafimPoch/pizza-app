import React from "react";
import { PizzaWrapper } from "./style";
import Pizza1 from "./pizza_1";
import Pizza2 from "./pizza_2";
import Pizza3 from "./pizza_3";
import Pizza4 from "./pizza_4";

export default () => {
  return (
    <PizzaWrapper>
      <Pizza1 />
      <Pizza2 />
      <Pizza3 />
      <Pizza4 />
      <Pizza1 />
      <Pizza2 />
      <Pizza3 />
      <Pizza4 />
      <Pizza1 />
    </PizzaWrapper>
  );
};
