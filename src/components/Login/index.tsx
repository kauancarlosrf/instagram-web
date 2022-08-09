import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login, Container, Logo, Cadastro, ButtonLogin, Borda, DivBorda, TextOr, Input, EntrarComFacebook, EsqueceuASenha, TextCadastro, CriarConta, TextObtem,
  Download, Apple, GPlay, LogoFacebook, ButtonLoginDisabled
} from './style';
import Rodape from '../Rodape';
import InstagramImg from '../../assets/images/logo.png';
import FacebookLogoImg from '../../assets/images/login/facebook_logo.svg';
import AppleImg from '../../assets/images/login/apple.png';
import GooglePlayImg from '../../assets/images/login/googleplay.png';
import { AuthContext } from "../../contexts/Auth/AuthContext";


export default function Index() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    const isLogged = await auth.signIn(email, senha);
    if (!isLogged) {
      alert("[ERROR] Email ou senha incorretos!");
    }
  }

  return (
    <Container>
      <Login onSubmit={handleSubmit}>
        <Logo src={InstagramImg} />

        <Input id= "email" name= "email" placeholder="Telefone, nome de usuário ou email" type= 'email' onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <Input id= "password" name= "password" placeholder= "Senha" type= 'password' onChange={(e) => {setSenha(e.target.value)}} value={senha} />

        {
          email.length >= 1 && senha.length >= 6
          ? <ButtonLogin id="buttonLogin" type="submit">Iniciar sessão</ButtonLogin>
          : <ButtonLoginDisabled disabled id="buttonLogin" type="submit">Iniciar sessão</ButtonLoginDisabled>
        }

        {/* //TODO Mudar este esquema depois (after, before...) */}
        <DivBorda> <Borda/><TextOr>OU</TextOr><Borda/> </DivBorda>

        <EntrarComFacebook><LogoFacebook src={FacebookLogoImg} />Entrar com o Facebook</EntrarComFacebook>

        <EsqueceuASenha href="/accounts/password/reset/">Esqueceu a senha?</EsqueceuASenha>
      </Login>
      
      <Cadastro>
        <TextCadastro>Não tem uma conta?<CriarConta href="/accounts/register/">Cadastre-se</CriarConta></TextCadastro>
      </Cadastro>

      <TextObtem>Obtém a aplicação.</TextObtem>

      <Download>
        <Apple src={AppleImg}/>
        <GPlay src={GooglePlayImg}/>
      </Download>

      {/* //TODO Mudar estes br depois */}
      <br /><br />
      <br /><br />

      <Rodape />
    </Container>
  );
}
