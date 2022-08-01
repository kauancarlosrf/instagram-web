import React, { useState } from "react";
//style
import { Login, Container, Logo, Cadastro, ButtonLogin, Borda, DivBorda, TextOr, Input,
  EntrarComFacebook, EsqueceuASenha, TextCadastro, CriarConta, TextObtem, Download, Apple,
  GPlay, LogoFacebook
} from './style';
//components
import Rodape from '../Rodape';
//images
import InstagramImg from '../../assets/images/login/logo.png';
import FacebookLogoImg from '../../assets/images/login/facebook_logo.svg';
import AppleImg from '../../assets/images/login/apple.png';
import GooglePlayImg from '../../assets/images/login/googleplay.png';


export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmail('');
    setSenha('');
  }

  return (
    <Container>
        
      <Login onSubmit={handleSubmit}>
        <Logo src={InstagramImg} />

        <Input 
          id= "email"
          name= "email"
          placeholder=
          "Telefone, nome de usuário ou email"
          type= 'text'
          onChange={(e) => {setEmail(e.target.value)}}
          value={email}
        />
        <Input
          id= "password"
          name= "password"
          placeholder= "Senha"
          type= 'password'
          onChange={(e) => {setSenha(e.target.value)}}
          value={senha}
        />

        <ButtonLogin id="buttonLogin" type="submit">Iniciar sessão</ButtonLogin>

        <DivBorda> <Borda/><TextOr>OU</TextOr><Borda/> </DivBorda>

        <EntrarComFacebook>
          <LogoFacebook src={FacebookLogoImg} />Entrar com o Facebook
        </EntrarComFacebook>

        <EsqueceuASenha href="/accounts/password/reset/">Esqueceu a senha?</EsqueceuASenha>
      </Login>
      
      <Cadastro>
        <TextCadastro>Não tem uma conta?<CriarConta href="/register/">Cadastre-se</CriarConta></TextCadastro>
      </Cadastro>

      <TextObtem>Obtém a aplicação.</TextObtem>

      <Download>
        <Apple src={AppleImg}/>
        <GPlay src={GooglePlayImg}/>
      </Download>

      <Rodape />
    
    </Container>
  );
}
