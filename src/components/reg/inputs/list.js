import React, { Fragment } from "react";
import { Field } from "redux-form";

export default ({ list }) => {
  return (
    <Fragment>
      <Field required name="store_id" component="select">
        {list.map(e => {
          return (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          );
        })}
      </Field>
    </Fragment>
  );
};
