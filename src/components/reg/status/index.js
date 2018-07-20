import React, { Fragment } from "react";
import { withRouter } from "react-router";
import SuccessText from "./success/";
import ErrorText from "./error";
import { redirectReg } from "../../../services/selectors/supportApi";

const Status = ({ reg, history }) => {
  const { success, error } = reg;
  redirectReg(success, history);

  return (
    <Fragment>
      {success ? <SuccessText /> : <ErrorText text={error} />}
    </Fragment>
  );
};

export default withRouter(Status);
