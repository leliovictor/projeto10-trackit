import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import {useState} from "react";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";
import HistoryPage from "./HistoryPage";
import HistoryDate from "./HistoryDate";

export default function App() {

    const [login, setLogin] = useState({}); //Fazer de acordo com a necessidade;

  return (
    <UserContext.Provider value={{login, setLogin}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage />} />
          <Route path="/historico/:date" element={<HistoryDate />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
