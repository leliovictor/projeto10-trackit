import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import {useState} from "react";

import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

export default function App() {

    const [tasks, setTasks] = useState([]); //Fazer de acordo com a necessidade;
    const [token, setToken] = useState('');


  return (
    <UserContext.Provider value={{tasks, setTasks}}> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
