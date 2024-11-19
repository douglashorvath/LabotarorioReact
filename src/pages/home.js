import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Escolha uma Atividade</h1>
            <ul>
                <li><Link to="/atividade1">Atividade 1 - Letreiro</Link></li>
                <li><Link to="/atividade2">Atividade 2 - Relógio</Link></li>
            </ul>
        </div>
    );
};

export default Home;
