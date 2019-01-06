import React, { useEffect } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./userInfoContainer";
import Content from "../../components/userInfo";

const UserInfo = ({ cleanLogin, userInf, user }) => {
  useEffect(() => {
    cleanLogin();
    userInf();
  });

  return <Content info={user} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
