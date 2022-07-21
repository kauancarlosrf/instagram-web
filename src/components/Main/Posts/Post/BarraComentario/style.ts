import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 49px;

  border-top: 1px solid rgb(235, 235, 235);

  padding: 4px 12px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const BotaoEmojis = styled.div`
  padding: 8px 12px 8px 0;
`;

export const CampoDeTexto = styled.input`
  width: 100%;

  color: #262626;

  font-size: 15px;
  line-height: 18px;

  &::placeholder {
    color: #999;
  }
`;

export const BotaoPublicar = styled.button`
  padding: 5px 0 5px 0;

  font-size: 14px;
  font-weight: bold;
  color: #0095F6;

  &:hover {
    cursor: pointer;
  }
`;

export const BotaoPublicarDisabled = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: #addfff;
`;