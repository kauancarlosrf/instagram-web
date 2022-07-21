import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 72px;

  gap: 10px;

  padding: 8px 20px;
`;

export const Image =styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const BoxNomePerfilEInformacoes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 14px;
  line-height: 18px;
`;

export const UltimasInformacoes = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: #8E8E8E;
`;
