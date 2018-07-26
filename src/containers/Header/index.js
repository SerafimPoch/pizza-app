import React from "react";
import Time from "../Clock/";
import Logo from "../../components/Header/img/";
import LinkToLogin from "../../components/Header/link";
import { HeaderContainer } from "./style";

export default () => {
  return (
    <HeaderContainer>
      <Time />
      <Logo />
      <LinkToLogin />
    </HeaderContainer>
  );
};
