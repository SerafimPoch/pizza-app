import React, { Fragment } from "react";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <label>Store password:</label>
      <Field
        className="userLogin"
        component="input"
        type="password"
        name="store_password"
        required
      />
    </Fragment>
  );
};
