import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function HistoryPage() {
  
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const [dateHistory, setDateHistory] = useState([]);

  useEffect(() => {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",login.config);
  
    promise
    .then((res) => setDateHistory(res.data))
    .catch((err)=> alert(`Error: ${err.response.data.message}`));
  
  },[]);

  const [calendarDay, setCalendarDay] = useState(new Date());

  function changeDate(e) {
    setCalendarDay(e);
  }

  function defineDateColor(date) {

    const today = dayjs().format("DD/MM/YYYY");
    const dateStr = dayjs(date).format("DD/MM/YYYY");
    let dateHabits = null;
    let classBackground = null;

    dateHistory.map((obj) => {
      if (obj.day === dateStr && obj.day !== today) {
        dateHabits = obj.habits;
      }
    });

    if (dateHabits !== null) {
      const background =
        dateHabits.filter((obj) => obj.done).length / dateHabits.length;

      if (background === 1) {
        classBackground = "green";
      } else {
        classBackground = "red";
      }
    }
    return classBackground;
  }

  function selectDay(date) {
    let dateStr = dayjs(date).format("DD/MM/YYYY");
    const selectDate = dateHistory.filter((obj) => obj.day === dateStr);
    if (selectDate.length !== 0) {
      dateStr = dateStr.replace("/",".");
      dateStr = dateStr.replace("/",".");
      
      navigate(`/historico/${dateStr}`, {
        state: {
          selectDate,
        },
      });
    }
  }

  return (
    <Content>
      <Header />
      <h1>Histórico</h1>
      <CalendarDiv>
        <Calendar
          tileClassName={({ date }) => defineDateColor(date)}
          onChange={changeDate}
          value={calendarDay}
          onClickDay={(date) => selectDay(date)}
        />
      </CalendarDiv>
      <Footer />
    </Content>
  );
}

const Content = styled.div`
  padding: 98px 17px 100px 17px;
  background: #f2f2f2;
  height: 100vh;
  width: 100%;

  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 17px;
  }

  h2 {
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;

const CalendarDiv = styled.div`
  width: 100%;
  height: fit-content;
  background: #ffffff;

  border-radius: 10px;

  .react-calendar {
    width: 100%;
    min-height: 100%;
    border: none;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day > * {
    padding: 7px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--now {
    background: #ffff76;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }

  .green > * {
    background-color: #8fc549;
    color: white;
  }

  .red > * {
    background-color: #c33131;
    color: white;
  }
`;
