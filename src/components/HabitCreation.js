import DayButton from "./DayButton";
import styled from "styled-components";

export default function HabitCreation({setNewHabit}) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];


  return (
    <Content>
      <input type="text" placeholder="nome do hábito" />
      <div>
        {week.map((weekDay, index) => (
          <DayButton key={index} day={weekDay} select={false} />
        ))}
      </div>
      <InteractionButtons>
        <CancelButton onClick={()=>setNewHabit(false)}>Cancelar</CancelButton>
        <SaveButton>Salvar</SaveButton>
      </InteractionButtons>
    </Content>
  );
}

const Content = styled.section`
  width: 100%;
  height: 180px;

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
