import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 64px;
  height: 84px;

  padding: 0 6px;

`;

export const Border = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border-radius: 50%;
  border: 2px solid red;
  
  background-color: white;
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;

  border-radius: 50%;
`;

export const NomePerfil = styled.span`
  width: 74px;
  height: 16px;

  padding: 0 2px;

  text-align: center;

  font-size: 12px;
`;
