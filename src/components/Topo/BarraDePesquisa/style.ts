import styled from "styled-components";

export const BoxPesquisa = styled.label`
  display: flex;
  align-items: center;

  width: 268px;
  height: 36px;

  box-sizing: border-box;
  padding: 0 16px;
  border-radius: 8px;

  background-color: #EFEFEF;
`;

export const CampoDePesquisa = styled.input`
  width: 100%;
  height: 25px;
  
  padding-left: 9px;
  
  font-size: 16px;
  color: #262626;
  background-color: #EFEFEF;

  &::placeholder {
    color: #8E8E8E;
    font-weight: 300;
  }
`;
