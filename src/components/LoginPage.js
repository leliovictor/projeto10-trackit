import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function LoginPage() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <Content>
      <img src={Logo} alt="TrackIt logo" />
      <form>
        <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="password" placeholder="senha" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
        <button>Entrar</button>
      </form>
      <Link to={"/cadastro"}>
        <h1>Não tem uma conta? Cadastre-se!</h1>
      </Link>
    </Content>
  );
}

const Content = styled.section`
  padding: 0 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;

  img {
    width: 180px;
    height: 178.38px;
    margin-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
  }

  input {
    margin-bottom: 6px;
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 11px;

    font-size: 19.976px;
    line-height: 25px;

    ::placeholder {
      font-size: 19.976px;
      line-height: 25px;

      color: #dbdbdb;
    }
  }

  button {
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;

    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #ffffff;
  }

  h1 {
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;

    color: #52b6ff;
  }
`;
