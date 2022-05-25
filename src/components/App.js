import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import {useState} from "react";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import HabitsPage from "./HabitsPage";

export default function App() {

    const [login, setLogin] = useState({}); //Fazer de acordo com a necessidade;

    console.log(login);

  return (
    <UserContext.Provider value={{login, setLogin}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
