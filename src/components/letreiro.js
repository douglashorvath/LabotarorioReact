import React, { useEffect, useRef } from 'react';
import './letreiro.css';

const Letreiro = () => {
    const letreiroRef = useRef(null);

    useEffect(() => {
        const letreiro = letreiroRef.current;
        let offset = 0;

        const moverTexto = () => {
            offset -= 2;
            if (offset < -letreiro.offsetWidth) {
                offset = window.innerWidth;
            }
            letreiro.style.transform = `translateX(${offset}px)`;
            requestAnimationFrame(moverTexto);
        };

        moverTexto();
    }, []);

    return (
        <div className="letreiro-container">
            <div className="letreiro" ref={letreiroRef}>
                Bem vindo à Fatec Presidente Prudente
            </div>
        </div>
    );
};

export default Letreiro;
