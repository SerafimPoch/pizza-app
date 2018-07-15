import React from "react";
import SignIn from "./signIn/";
import SignUp from "./signUp";
import { SubmitReg } from "./style";

export default () => {
  return (
    <SubmitReg>
      <SignIn />
      <SignUp />
    </SubmitReg>
  );
};
