import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;

  width: 100%;
  height: 100%;
`;

export const IconeMensagens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 96px;
  height: 96px;

  border-radius: 50%;
  border: 2px solid #383838;

  transform: rotate(-23deg);
  margin-bottom: 3px;
`;

export const Titulo = styled.span`
  font-weight: 300;
  font-size: 22px;
  line-height: 26px;
  color: #262626;
`;

export const SubTitulo = styled.span`
  font-size: 14px;
  line-height: 18px;
  color: #8E8E8E;
`;

export const BotaoEstranhoEnviarMensagem = styled.button`
  width: 133px;
  height: 30px;

  padding: 5px 9px;

  font-weight: bold;
  font-size: 14px;
  color: #fff;

  background-color: #0095F6;
  border-radius: 4px;

  margin-top: 13px;

  &:hover {
    cursor: pointer;
  }
`;

