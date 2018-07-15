import styled from "styled-components";

export const AddButtonWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding-right: 60px;
`;

export const AddButton = styled.button`
  margin-top: 10px;
  font-family: "Righteous", cursive;
  font-size: 14px;
  width: 160px;
  height: 40px;
  outline: 0;
  background-color: rgb(0, 160, 27);

  :hover {
    background-color: #2ecc71;
  }

  :active {
    background-color: #2ecc71;
    box-shadow: 0 5px #95a5a6;
    transform: translateY(4px);
  }
`;
