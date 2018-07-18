import React, { Fragment } from "react";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <label>Username:</label>
      <Field
        className="userLogin"
        component="input"
        name="username"
        minLength="2"
        required
      />
    </Fragment>
  );
};
