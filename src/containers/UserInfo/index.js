import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./userInfoContainer";
import {
  ContainerUser,
  UserText,
  ButtonContainer,
  PizzaList,
  LogOut
} from "./style";

class UserInfo extends Component {
  componentDidMount() {
    this.props.cleanLogin();
    this.props.userInf();
  }

  logout() {
    return localStorage.removeItem("token");
  }

  render() {
    const { username, uuid, email, created_at, last_login } = this.props.user;
    return (
      <ContainerUser>
        <UserText>
          <p>username: {username}</p>
          <p>uuid: {uuid}</p>
          <p>email: {email}</p>
          <p>created_at: {created_at}</p>
          <p>last_login: {last_login}</p>
        </UserText>
        <ButtonContainer>
          <PizzaList>
            <Link to="/pizza-list">PIZZA LIST</Link>
          </PizzaList>
          <LogOut onClick={this.logout}>
            <Link to="/login">LOG OUT</Link>
          </LogOut>
        </ButtonContainer>
      </ContainerUser>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
