import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #fafafa;
`;

export const Login = styled.form`
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 396px;

  background: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;

  padding: 10px 0px;
`;

export const Logo = styled.img`
  width: 175px;
  height: 51px;
  margin: 37px 88px;
`
export const Cadastro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 61px;

  border: 0.5px solid #dbdbdb;
  border-radius: 1px;

  background-color: #fff;

  padding: 10px 0;
  margin-top: 10px;
`

export const Campos = styled.div`
  color: #fafafa; 
  width: 268px;
  font-size: 14px;
  text-align: start;
  margin: 0 40px;
`

export const Input = styled.input`
  width: 269px;
  height: 36px;

  padding: 9px 8px 7px;
  margin: 0 auto 6px;

  font-size: 12px;
  text-align: start;

  border: 1px solid #dbdbdb;
  border-radius: 2px;

  background-color: #fafafa;
  outline: none;

  ::placeholder {
    color: #858585;
  
  }:focus{
    border: 1px solid #959a9d;
  }
`;

// Componentes 

export const ButtonLogin = styled.button`
  width: 269px;
  height: 30px;

  margin: 8px auto;

  color: #fff;
  background-color: #b2dffc;
  border: none;
  border-radius: 4px;

  line-height: 18px;
  font-weight: 600;
  font-size: 14px;
`

export const DivBorda = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`

export const Borda = styled.div`
  width: 108px;
  height: 1px;

  background-color: lightgrey;
`

export const TextOr = styled.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  color: #97988f;

  margin: 10px 17px;
`

export const EntrarComFacebook = styled.button`
  display: flex;
  align-items: center;

  font-size:14px;
  color: #385185;
  font-weight: bold;
  line-height: 18px;

  margin: 12px auto;

  :hover {
    cursor: pointer;
  }
`

export const LogoFacebook = styled.img`
  width: 16px;
  height: 16px;

  margin-right: 8px;
`

export const EsqueceuASenha = styled.div`
  font-size: 12px;
  color: #00376B;
  line-height: 16px;
  letter-spacing: normal;
  margin: auto;
`

export const TextCadastro = styled.div`
  display: flex;

  font-size:14px;
  line-height: 18px;
  color: #262626;
`

export const CadastroText = styled.div`
  font-size:14px;
  line-height: 18px;
  color: #0095f6;
  font-weight: 500;

  margin-left: 5px;
`

export const TextObtem = styled.div`
  display: flex;

  font-size: 14px;
  line-height: 18px;

  text-align: center;

  margin-top: 18px;
`

export const Download = styled.div`
  width: 350px;
  height: 43px;
  
  margin-top: 20px;
`

export const Apple = styled.img`
  width: 136px;
  height: 43px;
  margin-left: 36px;
`

export const GPlay = styled.img`
  width: 136px;
  height: 43px;
  margin-left: 8px;
`
