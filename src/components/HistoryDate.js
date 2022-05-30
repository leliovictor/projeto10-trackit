import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function HistoryDate() {
  const { date } = useParams();
  const location = useLocation();

  const dateHabit = location.state.selectDate[0];

  function checkifDone(bool) {
    if (bool)
      return (
        <IconDiv color="green">
          <ion-icon name="thumbs-up"></ion-icon>
        </IconDiv>
      );

    return (<IconDiv color="red"><ion-icon name="thumbs-down"></ion-icon></IconDiv>);
  }

  return (
    <Content>
      <Header />
      <h1>{dateHabit.day}</h1>
      {dateHabit.habits.map((obj, index) => (
        <Conteiner>
          <h2>{obj.name}</h2>
          {checkifDone(obj.done)}
        </Conteiner>
      ))}
      <Footer />
    </Content>
  );
}

const Content = styled.section`
  padding-top: 70px;
  background: #f2f2f2;
  padding: 80px 17px 120px 17px;
  width: 100%;
  min-height: 100vh;

  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 17px;
  }
`;

const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  margin-bottom: 20px;

  h2 {
    width: 80%;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    word-wrap: wrap;
    color: #126ba5;
  }
`;

const IconDiv = styled.div`
  color: ${props => props.color};
  font-size: 25px;
`;
