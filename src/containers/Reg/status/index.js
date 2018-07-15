import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { mapStateToProps } from "./statusContainer";
import { InfoTextTrue, InfoTextFalse } from "../../Login/status/style";
import { redirectReg } from "../../../services/selectors/supportApi";

const Status = ({ create, history }) => {
  const { success, validations } = create;

  const check = () => {
    return success ? redirectReg(history) : false;
  };

  check();

  return (
    <Fragment>
      {success ? (
        <InfoTextTrue>
          <p>Success !</p>
        </InfoTextTrue>
      ) : (
        <InfoTextFalse>{validations}</InfoTextFalse>
      )}
    </Fragment>
  );
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Status));
