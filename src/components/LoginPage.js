import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//FINAL DO PROJETO, MUDAR O VALUE DOS INPUT PARA A VARIAVEL {EMAIL,PASSWORD};

export default function LoginPage() {

    const { setLogin } = useContext(UserContext);

    const navigate = useNavigate();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    function login(e) {
        e.preventDefault();

        /*const body = {
            email,
            password
        }*/

        const body = {
            email:"lelio@victor.com",
            password:"trackit"
        }
        
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",body)
        
        promise
            .then(res=>registerLogin(res.data))
            .catch(err=>{console.log(err)});
    }

    function registerLogin(obj) {
        setLogin({...obj, config: {
          header: {
              Authorization:`Bearer ${obj.token}`
          }
      }
        });

        navigate("/hoje");
    }

  return (
    <Content>
      <img src={Logo} alt="TrackIt logo" />
      <form onSubmit={login}>
        <input type="email" placeholder="email" value="lelio@victor.com" onChange={(e)=>setEmail(e.target.value)} required/>
        <input type="password" placeholder="senha" value="trackit" onChange={(e)=>setPassword(e.target.value)} required/>
        <button type="submit">Entrar</button>
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
