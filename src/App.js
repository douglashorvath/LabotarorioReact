import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Letreiro from './components/letreiro';
import Relogio from './components/relogio';
import Contador from './components/contador';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividade1" element={<Letreiro />} />
        <Route path="/atividade2" element={<Relogio />} />
        <Route path="/atividade3" element={<Contador />} />
      </Routes>
    </Router>
  );
};

export default App;
