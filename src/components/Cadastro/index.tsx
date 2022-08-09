import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, 
  BoxPrincipal, Logo, TituloBoxPrincipal, BotaoLogarComFacebook, BoxOU, TextoOU, Form, Input, BoxPoliticaDePrivacidade, TextoPoliticaDePrivacidade, BotaoCadastrarDisabled, BotaoCadastrar, 
  BoxLoginRedirect, TextoLoginRedirect, LinkLoginRedirect,
  BoxDownloadApps, TextoDownloadApps, BoxImgDownloads, AppStore, GooglePlay
} from './style';
import Rodape from "../Rodape";
// icons e images
import { RiFacebookBoxFill } from 'react-icons/ri';
import LogoInstagramImg from '../../assets/images/logo.png';
import AppleDownloadImg from '../../assets/images/login/apple.png';
import GooglePlayDownloadImg from '../../assets/images/login/googleplay.png';

export default function Cadastro() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nomeDeUsuario, setNomeDeUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const created = await auth.signUp(email, nomeCompleto, nomeDeUsuario, senha);
    if (created) {
      alert("Conta criada com sucesso!");
      navigate('/');
    } else {
      alert("[ERROR] Não foi possível criar a conta.");
      setSenha('');
    }
  }

  return (
    <Container>

      <BoxPrincipal>
        <Logo src={LogoInstagramImg} alt="Logo do Instagram" />
        <TituloBoxPrincipal>Cadastre-se para ver fotos e vídeos dos seus amigos.</TituloBoxPrincipal>
        <BotaoLogarComFacebook><RiFacebookBoxFill style={{fontSize: 20}} /> Entrar com o Facebook</BotaoLogarComFacebook>
        <BoxOU><TextoOU>OU</TextoOU></BoxOU>
        <Form onSubmit={handleSubmit}>
          <Input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Número do celular ou email" />
          <Input value={nomeCompleto} onChange={(e) => {setNomeCompleto(e.target.value)}} type="text" placeholder="Nome completo" />
          <Input value={nomeDeUsuario} onChange={(e) => {setNomeDeUsuario(e.target.value)}} type="text" placeholder="Nome de usuário" />
          <Input value={senha} onChange={(e) => {setSenha(e.target.value)}} type="password" placeholder="Senha" />
          <BoxPoliticaDePrivacidade>
            <TextoPoliticaDePrivacidade>
              As pessoas que usam nosso serviço podem ter carregado suas informações de contato no Instagram. Saiba mais
            </TextoPoliticaDePrivacidade>
            <TextoPoliticaDePrivacidade>
              Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.
            </TextoPoliticaDePrivacidade>
          </BoxPoliticaDePrivacidade>
          {
            senha.length >= 6 && email !== '' && nomeCompleto !== '' && nomeDeUsuario !== ''
            ? <BotaoCadastrar type="submit">Cadastre-se</BotaoCadastrar>
            : <BotaoCadastrarDisabled>Cadastre-se</BotaoCadastrarDisabled>
          }
        </Form>
      </BoxPrincipal>

      <BoxLoginRedirect>
        <TextoLoginRedirect>Tem uma conta?<LinkLoginRedirect href="/">Conecte-se</LinkLoginRedirect></TextoLoginRedirect>
      </BoxLoginRedirect>

      <BoxDownloadApps>
        <TextoDownloadApps>Obtenha o aplicativo.</TextoDownloadApps>
        <BoxImgDownloads>
          <AppStore src={AppleDownloadImg} alt="Imagem de download da AppStore da Apple" />
          <GooglePlay src={GooglePlayDownloadImg} alt="Imagem de download da GooglePlay do Google" />
        </BoxImgDownloads>
      </BoxDownloadApps>

      <Rodape />

    </Container>
  );
}
