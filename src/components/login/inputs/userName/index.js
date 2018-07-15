import React, { Fragment } from "react";
import { Label } from "./style";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <Label>Username:</Label>
      <Field
        component="input"
        name="username"
        minLength="2"
        className="userLogin"
      />
    </Fragment>
  );
};
