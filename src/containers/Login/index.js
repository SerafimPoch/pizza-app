import React, { Component } from "react";
import { reduxForm } from "redux-form";
import Content from "../../components/Login/";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./loginContainer";
import { ContainerLogin, Form } from "./style";

class Login extends Component {
  loginPost = ({ username, password }) => {
    const credentials = {
      username: username,
      password: password
    };
    return this.props.loginUser(credentials);
  };

  componentDidUpdate() {
    localStorage.setItem("token", JSON.stringify(this.props.login.token));
  }

  render() {
    return (
      <ContainerLogin>
        <Form onSubmit={this.props.handleSubmit(this.loginPost)}>
          <Content login={this.props.login} />
        </Form>
      </ContainerLogin>
    );
  }
}

Login = reduxForm({
  form: "login"
})(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
