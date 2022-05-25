import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function HabitsPage() {
  return (
    <Content>
      <Header />
      <MyHabits>
        <h1>Meus hábitos</h1>
        <Button>+</Button>
      </MyHabits>
      <h2>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </h2>
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
  }

  h2 {
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;

const MyHabits = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 28px;
`

const Button = styled.div`
  width: 40px;
  height: 35px;

  background: #52b6ff;
  border-radius: 4.63636px;
  color: #ffffff;
  font-size: 27px;
  line-height: 27px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
