import React, { Fragment } from "react";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <label>Password:</label>
      <Field
        className="userLogin"
        component="input"
        type="password"
        name="password"
        minLength="8"
        required
      />
    </Fragment>
  );
};
