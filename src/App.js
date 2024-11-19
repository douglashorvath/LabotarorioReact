import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Letreiro from "./components/letreiro";
import Relogio from "./components/relogio";
import Contador from "./components/contador";
import Atividade4 from "./components/atividade4/Atividade4"; 
import Atividade5 from "./components/atividade5/Atividade5";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividade1" element={<Letreiro />} />
        <Route path="/atividade2" element={<Relogio />} />
        <Route path="/atividade3" element={<Contador />} />
        <Route path="/atividade4" element={<Atividade4 />} />
        <Route path="/atividade5" element={<Atividade5 />} />
      </Routes>
    </Router>
  );
}
