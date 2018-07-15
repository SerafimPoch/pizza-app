import React, { Fragment } from "react";
import { withRouter } from "react-router";
import SuccessText from "./success";
import ErrorText from "./error";
import { redirectLog } from "../../../services/selectors/supportApi";

const Status = ({ login, history }) => {
  const { success, error } = login;

  redirectLog(success, history);

  return (
    <Fragment>
      {success ? <SuccessText /> : <ErrorText text={error} />}
    </Fragment>
  );
};

export default withRouter(Status);
