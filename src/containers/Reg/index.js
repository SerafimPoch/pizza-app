import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer/";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { mapStateToProps, mapDispatchToProps } from "./regContainer";
import { ContainerReg, Form } from "./style";
import Content from "../../components/reg/";

class Reg extends Component {
  componentDidMount() {
    this.props.fetchStore();
  }

  reg = ({
    username,
    password,
    password_repeat,
    email,
    store_password,
    store_id
  }) => {
    const userData = {
      username: username,
      password: password,
      password_repeat: password_repeat,
      email: email,
      store_id: Number(store_id),
      store_password: store_password
    };

    return this.props.createUser(userData);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <ContainerReg>
          <Form onSubmit={this.props.handleSubmit(this.reg)}>
            <Content list={this.props.list} reg={this.props.create} />
          </Form>
        </ContainerReg>
        <Footer />
      </Fragment>
    );
  }
}

Reg = reduxForm({
  form: "reg"
})(Reg);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reg);
