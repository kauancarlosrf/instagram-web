import styled from "styled-components";

export const ContainerDisabled = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 72px;

  gap: 10px;

  padding: 8px 20px;

  text-decoration: none;
  cursor: pointer;

  :hover {
    background-color: rgb(250, 250, 250);
    border-right: 1px solid grey;
  }
`;

export const ContainerActive = styled(ContainerDisabled)`
  background-color: rgb(150, 150, 150) !important;
  cursor: default;
  :hover {
    border-right: 1px solid grey;
  }
`;

export const Image =styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

export const BoxNomePerfilEInformacoes = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 3px;
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
