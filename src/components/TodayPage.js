import Header from "./Header";
import Date from "./Date";
import Footer from "./Footer";
import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import HabitCard from "./HabitCard";

export default function TodayPage() {
  
  const { login } = useContext(UserContext);

  console.log(login);

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    //Promise aqui, config dentro do login já
  },[]);

  function checkHabits() {
    if (habits.length === 0) {
      return <P color={"#BABABA"}>Nenhum hábito concluído ainda</P>;
    }

    return <P color={"#8FC549"}>Tantos dos hábitos concluídos</P>;
  }

  //Vou precisar fazer um MAP AQUI do HabitCard ...

  return (
    <Content>
      <Header />
      <Date />
      {checkHabits()}
      <HabitCard />
      <Footer />
    </Content>
  );
}

const Content = styled.section`
  padding-top: 70px;
  background: #F2F2F2;
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
