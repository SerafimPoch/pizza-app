import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: #b44418;
  background-size: cover;
  color: white;
  justify-content: center;
`;

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

export const PizzaWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-left: 50px;
  margin-right: 50px;
`;

export const PizzaIcon = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 50px;
  margin-top: 50px;
`;

export const PizzaTextWraper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 15px;
  border-top: 1px solid white;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  padding-top: 5px;
`;
