import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    
    const percentage = 50; //Colocar depois valor variavel vindo do useContext;

    return (
    <Div>
      <Link to={"/habitos"}>Hábitos</Link>
      <Circular>
      <CircularProgressbar
        value={percentage}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#FFFFFF",
          textSize: "18px",
          pathColor: "#FFFFFF",
          trailColor: "transparent",
          width: "91px",
          height: "91px"
        })}
      />
      </Circular>
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

const Circular = styled.div`
    width: 91px;
    height: 91px;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 10px;
`
