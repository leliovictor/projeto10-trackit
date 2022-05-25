import styled from "styled-components";
import { useState } from "react";

export default function HabitCard() {
  //recisa ser só o componente, com props e etc;

  const [selected, setSelected] = useState(false);
  //USAR SPAN PARA COR DO NUMERO DEPOIS

  return (
    <Habit>
      <div>
        <h1>Ler 1 capítulo de livro</h1>
        <h2>Sequência atual: <span>3 dias</span></h2>
        <h2>Seu recorde: 5 dias</h2>
      </div>
      <Button selected={selected} onClick={() => setSelected(!selected)}>
        <ion-icon name="checkbox"></ion-icon>
      </Button>
    </Habit>
  );
}

const Habit = styled.div`
  width: 100%;
  height: 94px;
  padding: 0 17px;
  margin-bottom: 10px;

  background: #FFFFFF;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
  }

  h2 {
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  border-radius: 5px;

  ion-icon {
    color: ${(props) => (props.selected ? "#8FC549" : "#EBEBEB")};
    font-size: 72px;
  }
`;
