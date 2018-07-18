import React, { Fragment } from "react";
import Username from "./username";
import Email from "./email";
import Password from "./password";
import Confirm from "./confirm";
import List from "./list";
import StorePassword from "./storePassword";

export default ({ list }) => {
  return (
    <Fragment>
      <Username />
      <Email />
      <Password />
      <Confirm />
      <List list={list} />
      <StorePassword />
    </Fragment>
  );
};
