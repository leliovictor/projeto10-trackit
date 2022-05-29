import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function register(e) {
    setLoading(true);
    e.preventDefault();

    const body = {
      email,
      name,
      image,
      password,
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );

    promise
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        alert(`Error: ${err}`);
        setLoading(false);
      });
  }

  function Loading() {
    if (loading) return <ThreeDots color="#FFFFFF" height="15px" />;

    return "Cadastrar";
  }

  return (
    <Content>
      <img src={Logo} alt="TrackIt logo" />
      <form onSubmit={register}>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading ? "disabled" : ""}
          loading={loading}
        />
        <Input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading ? "disabled" : ""}
          loading={loading}
        />
        <Input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading ? "disabled" : ""}
          loading={loading}
        />
        <Input
          type="text"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          disabled={loading ? "disabled" : ""}
          loading={loading}
        />
        <button type="submit">{Loading()}</button>
      </form>
      <Link to={"/"}>
        <h1>Já tem uma conta? Faça login!</h1>
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

  button {
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    display: flex;
    align-items: center;
    justify-content:center;

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

const Input = styled.input`
  margin-bottom: 6px;
  width: 100%;
  height: 45px;
  background: ${(props) => (props.loading ? "#F2F2F2" : "#ffffff")};
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
`;
