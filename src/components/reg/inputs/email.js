import React, { Fragment } from "react";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <label>Email:</label>
      <Field
        className="userLogin"
        type="email"
        component="input"
        name="email"
        required
      />
    </Fragment>
  );
};
