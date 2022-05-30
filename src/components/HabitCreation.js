import DayButton from "./DayButton";
import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function HabitCreation({ display, setCreationHabitDisplay }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [loading, setLoading] = useState(false);

  const { login, setLogin } = useContext(UserContext);

  const [habit, setHabit] = useState({ name: "", days: [] });

  function nameHabit(e) {
    setHabit({ ...habit, name: e.target.value });
  }

  function postHabit() {
    if (habit.name.length === 0) return alert("Digite o nome do seu hábito");
    if (habit.days.length === 0) return alert("Escolha um dia da semana");

    setLoading(true);

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      habit,
      login.config
    );

    promise
      .then((res) => {
        sucessCreationHabit(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(`Error: ${err.response.data.message}`);
        setLoading(false);
      });
  }

  function sucessCreationHabit(obj) {
    setLogin({ ...login, refreshUserHabits: obj });
    setCreationHabitDisplay("none");
    setHabit({ name: "", days: [] });
  }

  function Loading() {
    if (loading) return <ThreeDots color="#FFFFFF" height="10px" />;

    return "Salvar";
  }

  return (
    <Content display={display}>
      <Input
        type="text"
        placeholder="nome do hábito"
        value={habit.name}
        onChange={(e) => nameHabit(e)}
        disabled={loading ? "disabled" : ""}
        loading={loading}
      />
      <div>
        {week.map((weekDay, index) => (
          <DayButton
            key={index}
            index={index}
            day={weekDay}
            habit={habit}
            setHabit={setHabit}
            changeBackgroundButton={!loading}
          />
        ))}
      </div>
      <InteractionButtons>
        <CancelButton onClick={() => setCreationHabitDisplay("none")}>
          Cancelar
        </CancelButton>
        <SaveButton onClick={postHabit}>{Loading()}</SaveButton>
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

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
`;

const CancelButton = styled.button`
  background: #ffffff;
  text-align: center;
  border: none;
  color: #52b6ff;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #d5d5d5;
  background: ${(props) => (props.loading ? "#F2F2F2" : "#ffffff")};
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
`;
