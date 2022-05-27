import styled from "styled-components";
import { useState } from "react";

export default function DayButton({ day }) {
  const [select, setSelect] = useState(false);

  return <WeekButton select={select} onClick={()=>setSelect(!select)}>{day}</WeekButton>;
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
