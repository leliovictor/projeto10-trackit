import styled from "styled-components";
import { useState } from "react";

export default function DayButton({ day, index, habit, setHabit }) {
  const [select, setSelect] = useState(false);

  function chooseHabitDay() {
    if(!select) {
        const days = [...habit.days,index].sort((a,b) => a-b);
        setHabit({...habit,days});
    }
    
    if(select) {
        const days = habit.days.filter((value) => value !== index);
        setHabit({...habit,days});
    }
    
    setSelect(!select);
  }

  return <WeekButton select={select} onClick={chooseHabitDay}>{day}</WeekButton>;
}

const WeekButton = styled.div`
  width: 30px;
  height: 30px;

  font-size: 20px;
  line-height: 25px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  
  color: ${props => props.select ? "#FFFFFF" : "#dbdbdb"};
  background-color: ${props => props.select ? "#CFCFCF" : "#FFFFFF"};;
  border: ${props => props.select ? "1px solid #CFCFCF" : "1px solid #d5d5d5"};
`;
