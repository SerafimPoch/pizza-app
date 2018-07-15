import React, { Fragment } from "react";
import { FootText, PizzaFoot } from "./style";

export default () => {
  return (
    <Fragment>
      <FootText>
        Kottans, Kottans str,
        <a className="tel" href="tel:5777887">
          tel. 577-78-87
        </a>
      </FootText>
      <PizzaFoot>Pizza Manager &copy; 2018</PizzaFoot>
    </Fragment>
  );
};
