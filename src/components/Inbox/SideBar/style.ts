import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: 100%;

  border-right: 1px solid rgb(219, 219, 219);
`;

export const BoxChangeAccount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  padding: 0 20px;

  border-bottom: 1px solid rgb(219, 219, 219);
`;

export const BotaoTrocarDeConta = styled.button`
  display: flex;
  align-items: center;

  height: 36px;

  padding: 5px 20px;

  gap: 2px;

  color: #262626;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

// código para dentro do modal:

export const DivBotaoFecharModal = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 34px;

  padding: 0 12px;
  margin: 12px 0 0;
`;

export const BotaoXFecharModal = styled.button`
  padding: 8px 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 185px;

  padding: 26px 0;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 6px;
`;

export const CampoDeTexto = styled.input`
  width: 270px;
  height: 38px;

  padding: 9px 8px 7px;

  border: 1px solid rgb(219, 219, 219);
  border-radius: 3px;

  background-color: #FAFAFA;
  font-size: 12px;

  color: #383838;

  ::placeholder {
    color: #8E8E8E;
  }
`;

export const LabelCaixinhaSalvarInformacoes = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 50px;
`;

export const SalvarInformacoesTxt = styled.span`
  font-size: 12px;
  line-height: 16px;
`;

export const BotaoLogar = styled.button`
  width: 270px;
  height: 30px;

  padding: 5px 9px;

  background-color: #0095F6;

  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #fff;

  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
  }
`;

export const BotaoLogarDisabled = styled.button`
  width: 270px;
  height: 30px;

  padding: 5px 9px;

  background-color: #addfff;

  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #fff;

  border-radius: 4px;
  border: 1px solid transparent;
`;

export const DivEsqueceuASenha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  margin-top: 15px;
`;

export const EsqueceuASenha = styled.a`
  font-size: 12px;
  color: #00376B;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
