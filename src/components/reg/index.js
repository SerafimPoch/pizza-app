import React, { Fragment } from "react";
import Inputs from "./inputs/";
import Buttons from "./buttons";

export default ({ list }) => {
  return (
    <Fragment>
      <Inputs list={list} />
      <Buttons />
    </Fragment>
  );
};
