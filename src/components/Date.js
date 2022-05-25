import dayjs from "dayjs";
import styled from "styled-components";

export default function Date() {
    
  const dayjs = require("dayjs");

  const weekday = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const [week, date] = [weekday[dayjs().day()], dayjs().format("DD/MM")];

  return <Day>{`${week} - ${date}`}</Day>;
}

const Day = styled.h1`
  margin-top: 28px;

  font-size: 22.976px;
  line-height: 29px;

  color: #126ba5;
`;
