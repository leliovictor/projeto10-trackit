import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Link } from "react-router-dom"; //SO PRA AGILIZAR A CONSTRUÇÃO, REMOVER O LINK DO H1 AO TERMINAR

export default function Header() {

  const { login } = useContext(UserContext);

  return (
    <Content>
      <Link to={"/"}>TrackIt</Link> 
      <img src={login.image} alt="User photo" />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 0 18px;

  width: 100%;
  height: 70px;

  position: fixed;
  top:0;
  left: 0;

  a {
    font-family: "Playball", sans-serif;
    font-size: 38.982px;
    line-height: 49px;

    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;

    border-radius: 98.5px;
  }
`;
