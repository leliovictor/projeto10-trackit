import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Div>
      <Link to={"/habitos"}>Hábitos</Link>
      <Link to={"/historico"}>Histórico</Link>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 70px;

  position: fixed;
  bottom: 0px;
  left: 0;
  background: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 31px;

  a {
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
  }
`;
