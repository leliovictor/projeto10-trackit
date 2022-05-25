import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Records() {
  return (
    <Content>
      <Header />
      <h1>Histórico</h1>
      <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      <Footer />
    </Content>
  );
}

const Content = styled.div`
  padding: 98px 0 100px 17px;
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
