import Header from "./Header";
import Date from "./Date";
import Footer from "./Footer";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import TodayHabitsCards from "./TodayHabitsCards";
import axios from "axios";

export default function TodayPage() {

  const { login, setLogin } = useContext(UserContext);

  const [todayHabits, setTodayHabits] = useState([]);

  const [percentage, setPercentage] = useState(0);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      login.config
    );

    promise
      .then((res) => {
        setTodayHabits(res.data);
      })
      .catch((err) => console.log(`Error: ${err.response.data.message}`));

  }, [refresh]);

  function checkPercentage() {

    const count = todayHabits.filter((obj)=>obj.done).length;
    const size = todayHabits.length;

    const value = ((count * 100) / size).toFixed(0);

    if(isNaN(value)) return 0;
    
    return value;
  }

  useEffect(()=> {
    setPercentage(checkPercentage());
  },[todayHabits]);

  useEffect(() => {
    setLogin({...login,percentage:percentage})
  },[percentage]);

  function checkHabits() {
    const anyDone = todayHabits.filter((obj) => obj.done).length;

    if (todayHabits.length === 0 || anyDone === 0) {
      return <P color={"#BABABA"}>Nenhum hábito concluído ainda</P>;
    }

    return <P color={"#8FC549"}>{percentage}% dos hábitos concluídos</P>;
  }

  return (
    <Content>
      <Header />
      <Date />
      {checkHabits()}
      <TodayHabitsCards
        todayHabits={todayHabits}
        refresh={refresh}
        setRefresh={setRefresh}
      />
      <Footer />
    </Content>
  );
}

const Content = styled.section`
  padding-top: 70px;
  background: #f2f2f2;
  padding: 70px 17px 120px 17px;
  width: 100%;
  height: 100vh;
`;

const P = styled.p`
  font-size: 17.976px;
  line-height: 22px;

  color: ${(props) => props.color};
  margin-bottom: 28px;
`;
