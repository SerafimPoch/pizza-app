import styled from "styled-components";
import { LoginSubmit } from "../../components/login/buttons/signIn/style";
import { SubmitReg } from "../../components/login/buttons/style";

export const ContainerUser = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  min-height: 400px;
`;

export const UserText = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 200px;
  font-size: 20px;
`;

export const ButtonContainer = SubmitReg.extend`
  width: 300px;
`;

export const PizzaList = LoginSubmit.extend``;

export const LogOut = LoginSubmit.extend`
  background-color: red;
`;
