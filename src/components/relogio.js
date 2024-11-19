import React, { useState, useEffect } from 'react';
import './relogio.css';

const Relogio = () => {
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relogio-container">
            <h1>{horaAtual.toLocaleTimeString()}</h1>
        </div>
    );
};

export default Relogio;
