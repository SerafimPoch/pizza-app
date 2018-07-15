import React, { Fragment } from "react";
import Inputs from "./inputs";
import Buttons from "./buttons/";
import Status from "./status";

export default ({ login }) => {
  return (
    <Fragment>
      <Inputs />
      <Buttons />
      <Status login={login} />
    </Fragment>
  );
};
