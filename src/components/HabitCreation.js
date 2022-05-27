import DayButton from "./DayButton";
import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function HabitCreation({ display, setNewHabit }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { login } = useContext(UserContext);

  const [habit, setHabit] = useState({ name: "", days: [] });

  function nameHabit(e) {
    setHabit({ ...habit, name: e.target.value });
  }

  function postHabit() {
    if (habit.name.length === 0) return alert("Digite o nome do seu hábito");
    if (habit.days.length === 0) return alert("Escolha um dia da semana");

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      habit,
      login.config
    );

        //ADICIONAR AQUI ANIMAÇÃO DO BUTTON E DISABLED INPUT;
        //O THEN REMOVE O DISABLE E ESCONDE MENU, RESETAR ADD HABIT BUTTON? So ESCONDER?


    promise
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        alert(`Error: ${err}`);
      });
  }

  return (
    <Content display={display}>
      <input
        type="text"
        placeholder="nome do hábito"
        value={habit.name}
        onChange={(e) => nameHabit(e)}
      />
      <div>
        {week.map((weekDay, index) => (
          <DayButton
            key={index}
            index={index}
            day={weekDay}
            select={false}
            habit={habit}
            setHabit={setHabit}
          />
        ))}
      </div>
      <InteractionButtons>
        <CancelButton onClick={() => setNewHabit("none")}>
          Cancelar
        </CancelButton>
        <SaveButton onClick={postHabit}>Salvar</SaveButton>
      </InteractionButtons>
    </Content>
  );
}

const Content = styled.section`
  width: 100%;
  height: 180px;
  display: ${(props) => props.display};

  background: #ffffff;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 29px;

  input {
    width: 100%;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding-left: 11px;
    color: #666666;
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom: 8px;

    ::placeholder {
      font-size: 19.976px;
      line-height: 25px;

      color: #dbdbdb;
    }
  }

  input + div {
    display: flex;
    margin-bottom: 29px;
  }
`;

const InteractionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 84px;
    height: 35px;

    font-size: 16px;
    line-height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 23px;
  }
`;

const SaveButton = styled.button`
  background: #52b6ff;
  border-radius: 4.63636px;
  border: none;

  color: #ffffff;
`;

const CancelButton = styled.button`
  background: #ffffff;
  text-align: center;
  border: none;
  color: #52b6ff;
`;
