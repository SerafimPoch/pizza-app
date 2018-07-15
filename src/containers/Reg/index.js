import React, { Component, Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer/";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { mapStateToProps, mapDispatchToProps } from "./regContainer";
import { RegForm, RegContainer, RegSubmit } from "./style";
import Status from "../../components/login/status";

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
    const { list } = this.props;
    return (
      <Fragment>
        <Header />
        <RegForm>
          <form
            onSubmit={this.props.handleSubmit(this.reg)}
            className="regform"
          >
            <label>Username:</label>
            <Field
              className="userLogin"
              component="input"
              name="username"
              minLength="2"
              required
            />
            <label>Email:</label>
            <Field
              className="userLogin"
              type="email"
              component="input"
              name="email"
              required
            />
            <label>Password:</label>
            <Field
              className="userLogin"
              component="input"
              type="password"
              name="password"
              minLength="8"
              required
            />
            <label>Confirm:</label>
            <Field
              className="userLogin"
              component="input"
              type="password"
              name="password_repeat"
              minLength="8"
              required
            />

            <Field required name="store_id" component="select">
              {list.map(e => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </Field>
            <label>Store password:</label>
            <Field
              className="userLogin"
              component="input"
              type="password"
              name="store_password"
              required
            />
            <RegContainer>
              <RegSubmit>SIGN UP</RegSubmit>
            </RegContainer>
            <Status />
          </form>
        </RegForm>
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
