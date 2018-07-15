import React, { Fragment } from "react";
import { Label } from "../userName/style";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <Label>Password:</Label>
      <Field
        component="input"
        type="password"
        name="password"
        minLength="8"
        className="userLogin"
      />
    </Fragment>
  );
};
