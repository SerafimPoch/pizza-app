import styled from "styled-components";
import { LoginSubmit } from "../../components/login/buttons/signIn/style";

export const RegForm = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  height: 430px;
  margin-top: 20px;

  .regform {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 400px;
  }
`;

export const RegContainer = styled.div`
  text-align: center;
  padding-top: 15px;
`;

export const RegSubmit = LoginSubmit.extend`
  width: 200px;
  height: 30px;
`;
