import React, { useEffect } from 'react';
import { reduxForm } from 'redux-form';
import Content from '../../components/login/';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './loginContainer';
import { ContainerLogin, Form } from './style';
import api from '../../services/api'

let Login = ({ signIn, handleSubmit, login }) => {
  const loginPost = ({ username, password }) => {
    const credentials = {
      username: username,
      password: password
    };
    return signIn(credentials)
  };

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(login.token));
    api.getNinja().then(e => console.log(e))
  }, []);

  return (
    <ContainerLogin>
      <Form onSubmit={handleSubmit(loginPost)}>
        <Content login={login} />
      </Form>
    </ContainerLogin>
  );
};

Login = reduxForm({
  form: 'login'
})(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
