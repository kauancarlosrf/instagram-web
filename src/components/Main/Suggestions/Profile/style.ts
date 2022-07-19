import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 56px;

  margin: 16px 0 10px;
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;

  border-radius: 50%;

  cursor: pointer;
`;

export const InformacoesConta = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  margin-left: 12px;

  width: 203px;
`;

export const LinkNomeDaConta = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #262626;

  height: 18px;
`;

export const NomeDoUsuario = styled.span`
  color: #8E8E8E;

  height: 18px;
`;

export const MudarDeConta = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #0095F6;

  cursor: pointer;
`;
