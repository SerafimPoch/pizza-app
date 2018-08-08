import React from "react";
import Time from "../Clock/";
import Logo from "../../components/header/img/";
import LinkToLogin from "../../components/header/link";
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
