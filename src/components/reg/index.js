import React, { Fragment } from "react";
import Inputs from "./inputs/";
import Buttons from "./buttons";
import Status from "./status";

export default ({ list, reg }) => {
  return (
    <Fragment>
      <Inputs list={list} />
      <Buttons />
      <Status reg={reg} />
    </Fragment>
  );
};
