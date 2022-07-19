import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 32px;

  margin: 15px 5px;

  padding-right: 4px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;

  border-radius: 50%;
`;

export const InformacoesConta = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  margin-left: 10px;

  width: 203px;
`;

export const LinkNomeDaConta = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #262626;

  line-height: 18px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const NomeDoUsuario = styled.span`
  color: #8E8E8E;

  font-size: 12px;

  line-height: 16px;
`;

export const SeguirAConta = styled.button`
  font-size: 12px;
  font-weight: bold;
  color: #0095F6;

  padding: 0 16px;

  cursor: pointer;
`;
