import React from "react";
import { ContainerUser } from "./style";
import Text from "./text";
import Buttons from "./buttons";

export default ({ info }) => {
  return (
    <ContainerUser>
      <Text info={info} />
      <Buttons />
    </ContainerUser>
  );
};
