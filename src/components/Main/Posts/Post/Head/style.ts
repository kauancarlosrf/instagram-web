import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 470px;
  height: 57px;

`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin: 8px 4px 8px 12px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  
  border-radius: 50%;
`;

export const NameAccount = styled.a`
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;

  color: #262626;

  padding: 2px;
  margin-left: 10px;
`;

export const MaisOpcoes = styled.div`
  padding: 8px;
  margin-right: 6px;
`;
