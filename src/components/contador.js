import React, { useState } from 'react';
import './contador.css';
import homemImg from '../assets/homem.jpg';
import mulherImg from '../assets/mulher.jpg';
import { FiPlus, FiMinus, FiRefreshCcw } from 'react-icons/fi';

const Contador = () => {
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);

    const resetar = () => {
        setHomens(0);
        setMulheres(0);
    };

    return (
        <div className="pagina">
            {/* Fundo animado */}
            <div className="fundo-estrelas"></div>

            <div className="retangulo-central">
                {/* Botão Resetar */}
                <button className="reset-button" onClick={resetar}>
                    <FiRefreshCcw size={28} />
                </button>

                {/* Total */}
                <div className="total-container">
                    <p className="label-total">Total</p>
                    <div className="total-caixinha">{homens + mulheres}</div>
                </div>

                {/* Contadores */}
                <div className="contadores">
                    {/* Contador de Homens */}
                    <div className="contador">
                        <img src={homemImg} alt="Homem" />
                        <p className="label">Homens</p>
                        <div className="numero-container">{homens}</div>
                        <div className="botoes">
                            <button
                                className="botao mais"
                                onClick={() => setHomens(homens + 1)}
                            >
                                <FiPlus size={32} />
                            </button>
                            <button
                                className="botao menos"
                                onClick={() => setHomens(Math.max(homens - 1, 0))}
                            >
                                <FiMinus size={24} />
                            </button>
                        </div>
                    </div>

                    {/* Contador de Mulheres */}
                    <div className="contador">
                        <img src={mulherImg} alt="Mulher" />
                        <p className="label">Mulheres</p>
                        <div className="numero-container">{mulheres}</div>
                        <div className="botoes">
                            <button
                                className="botao mais"
                                onClick={() => setMulheres(mulheres + 1)}
                            >
                                <FiPlus size={32} />
                            </button>
                            <button
                                className="botao menos"
                                onClick={() => setMulheres(Math.max(mulheres - 1, 0))}
                            >
                                <FiMinus size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contador;
