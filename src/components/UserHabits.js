import { useState, useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import DayButton from "./DayButton";
import TrashIcon from "../assets/images/trashIcon.svg";

export default function UserHabits() {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { login, setLogin } = useContext(UserContext);

  const [myHabits, setMyHabits] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      login.config
    );

    promise
      .then((res) => {
        setMyHabits(res.data);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }, [login]);

  function checkIfHaveAnyHabits() {
    if (myHabits.length === 0) {
      return (
        <h2>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </h2>
      );
    }

    return renderMyHabits();
  }

  function deleteHabit(id) {
    const text = "Gostaria de deletar esse hábito?";
    if (window.confirm(text) == true) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        login.config
      );

      promise.catch((err) => console.log(`Error: ${err}`));

      setLogin({ ...login, habitDelete: id });
    }
  }

  function renderMyHabits() {
    return myHabits.map((habit, index) => (
      <UserHabitDiv key={index}>
        <h1>{habit.name}</h1>
        <DeleteIcon
          src={TrashIcon}
          alt="Delete icon"
          onClick={() => deleteHabit(habit.id)}
        />
        <WeekDays>
          {week.map((weekDay, index) => (
            <DayButton
              key={index}
              index={index}
              day={weekDay}
              habit={habit}
              changeBackgroundButton={false}
            />
          ))}
        </WeekDays>
      </UserHabitDiv>
    ));
  }

  return <>{checkIfHaveAnyHabits()}</>;
}

const UserHabitDiv = styled.div`
  width: 100%;
  height: 91px;
  padding: 13px 0 0 15px;
  margin-bottom: 10px;
  position: relative;

  background: #ffffff;
  border-radius: 5px;

  h1 {
    margin-bottom: 10px;
  }
`;

const WeekDays = styled.div`
  display: flex;
`;

const DeleteIcon = styled.img`
  width: 13px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: 11px;
`;
