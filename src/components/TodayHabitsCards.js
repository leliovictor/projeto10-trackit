import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function TodayHabitsCards({ todayHabits, setTodayHabits, percentage, setPercentage, refresh, setRefresh }) {
  
  const { login, setLogin } = useContext(UserContext);

  function requestHabitDone(id, done) {
    if (!done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        null,
        login.config
      );

      promise
        .then((res) => setRefresh(!refresh))
        .catch((err) => console.log(`Error: ${err}`));
    }

    if (done) {
      const promise = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
        null,
        login.config
      );

      promise
        .then((res) => setRefresh(!refresh))
        .catch((err) => console.log(`Error: ${err}`));
    }
  }

  return (
    <>
      {todayHabits.map((obj, index) => (
        <Habit key={index}>
          <div>
            <h1>{obj.name}</h1>
            <h2>
              Sequência atual:{" "}
              <NumberOfCurrentDays tone={obj.done}>
                {obj.currentSequence} dias
              </NumberOfCurrentDays>
            </h2>
            <h2>
              Seu recorde:{" "}
              <NumberOfRecordDays
                tone={obj.highestSequence === obj.currentSequence && obj.done}
              >
                {obj.highestSequence} dias
              </NumberOfRecordDays>
            </h2>
          </div>
          <Button
            selected={obj.done}
            onClick={() => requestHabitDone(obj.id, obj.done)}
          >
            <ion-icon name="checkbox"></ion-icon>
          </Button>
        </Habit>
      ))}
    </>
  );
}

const Habit = styled.div`
  width: 100%;
  height: 94px;
  padding: 0 17px;
  margin-bottom: 10px;

  background: #ffffff;
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

const NumberOfCurrentDays = styled.span`
  color: ${(props) => (props.tone ? "#8FC549" : "#666666")};
`;

const NumberOfRecordDays = styled.span`
  color: ${(props) => (props.tone ? "#8FC549" : "#666666")};
`;
