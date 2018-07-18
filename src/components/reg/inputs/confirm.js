import React, { Fragment } from "react";
import { Field } from "redux-form";

export default () => {
  return (
    <Fragment>
      <label>Confirm:</label>
      <Field
        className="userLogin"
        component="input"
        type="password"
        name="password_repeat"
        minLength="8"
        required
      />
    </Fragment>
  );
};
