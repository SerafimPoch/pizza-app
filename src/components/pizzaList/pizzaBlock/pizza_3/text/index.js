import React from "react";
import { PizzaTextWraper } from "./style";
import Time from "./time";
import Price from "./price";

export default () => {
  return (
    <PizzaTextWraper>
      <Time />
      <Price />
    </PizzaTextWraper>
  );
};
