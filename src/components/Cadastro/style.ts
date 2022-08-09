import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: #fafafa;
`;

export const BoxPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 350px;
  height: 636px;

  border: 1px solid lightgrey;
  border-radius: 2px;

  margin-bottom: 10px;
`;

export const Logo = styled.img`
  margin: 50px 10px 15px;
`;

export const TituloBoxPrincipal = styled.h2`
  font-size: 17px;
  color: #8E8E8E;
  text-align: center;

  margin: 0 40px 10px;
`;

export const BotaoLogarComFacebook = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;

  width: 268px;
  height: 32px;

  padding: 5px 9px;
  margin: 8px 0;

  background-color: #0095f6;
  border-radius: 3px;

  color: #fff;
  font-size: 14px;
  font-weight: bold;

  :hover {
    cursor: pointer;
  }
`;

export const BoxOU = styled.div`
  width: 268px;
  height: 15px;
  text-align: center;

  margin: 6px 40px 8px;
`;

export const TextoOU = styled.span`
  font-size: 13px;
  color: #8E8E8E;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 0 10px;
  padding: 10px 0;
`;

export const Input = styled.input`
  width: 258px;
  height: 36px;

  border: 1px solid lightgrey;

  padding: 9px 8px 7px;
  margin-bottom: 6px;

  font-size: 12px;

  color: #383838;

  ::placeholder {
    color: #8E8E8E;
  }

  :active {
    border: 1px solid grey;
  }
`;

export const BoxPoliticaDePrivacidade = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  width: 268px;
  height: 112px;

  margin: 10px 40px;
`;

export const TextoPoliticaDePrivacidade = styled.span`
  font-size: 12px;
  color: #8E8E8E;

  text-align: center;
`;

export const BotaoCadastrarDisabled = styled.button`
  width: 268px;
  height: 30px;

  background-color: #0090aa;

  font-size: 14px;
  font-weight: bold;
  color: #fff;

  border-radius: 4px;

  margin: 8px 40px;
`;

export const BotaoCadastrar = styled(BotaoCadastrarDisabled)`
  background-color: #0095f6;
  cursor: pointer;
`;

// SEGUNDA BOX

export const BoxLoginRedirect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 70px;

  border: 1px solid lightgrey;
  border-radius: 2px;

  margin: 0 0 10px;
  padding: 10px 0;
`;

export const TextoLoginRedirect = styled.span`
  font-size: 14px;
`;

export const LinkLoginRedirect = styled.a`
  color: #0095f6;
  text-decoration: none;

  margin-left: 4px;
`;

// TERCEIRA BOX - downloads

export const BoxDownloadApps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 350px;
  height: 102px;
`;

export const TextoDownloadApps = styled.span`
  width: 310px;
  height: 18px;

  font-size: 14px;

  text-align: center;

  margin: 10px 20px;
`;

export const BoxImgDownloads = styled.div`
  display: flex;

  gap: 10px;
`;

export const AppStore = styled.img`
  height: 100%;
  max-height: 40px;
`;

export const GooglePlay = styled.img`
  height: 100%;
  max-height: 40px;
`;
