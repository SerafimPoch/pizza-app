import React from "react";
import { Link } from "react-router-dom";
import { PizzaList } from "./style";

export default () => {
  return (
    <PizzaList>
      <Link to="/pizza-list">PIZZA LIST</Link>
    </PizzaList>
  );
};
