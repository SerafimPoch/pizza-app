import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { mapStateToProps, mapDispatchToProps } from "./regContainer";
import { ContainerReg, Form } from "./style";
import Content from "../../components/reg/";

let Reg = ({ fetchStore, createUser, handleSubmit, list, create }) => {
  useEffect(() => {
    fetchStore();
  });

  const reg = ({
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

    return createUser(userData);
  };

  return (
    <ContainerReg>
      <Form onSubmit={handleSubmit(reg)}>
        <Content list={list} reg={create} />
      </Form>
    </ContainerReg>
  );
};

Reg = reduxForm({
  form: "reg"
})(Reg);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reg);
