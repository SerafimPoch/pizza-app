import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./userInfoContainer";
import Content from "../../components/userInfo";

class UserInfo extends Component {
  componentDidMount() {
    this.props.cleanLogin();
    this.props.userInf();
  }

  render() {
    return <Content info={this.props.user} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
