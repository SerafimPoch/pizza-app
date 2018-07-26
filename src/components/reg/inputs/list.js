import React from "react";
import PropTypes from "prop-types";
import { Field } from "redux-form";

const List = ({ list }) => {
  return (
    <Field required name="store_id" component="select">
      {list.map(e => {
        return (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        );
      })}
    </Field>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  )
};

export default List;
