import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1>Bem-vindo ao Projeto React</h1>
            <p>Escolha uma das atividades abaixo para explorar exemplos de React:</p>
            <div className="links-container">
                <Link to="/atividade1" className="link-button">
                    Atividade 1 - Letreiro
                </Link>
                <Link to="/atividade2" className="link-button">
                    Atividade 2 - Relógio
                </Link>
                <Link to="/atividade3" className="link-button">
                    Atividade 3 - Contador de Pessoas
                </Link>
                <Link to="/atividade4" className="link-button">
                    Atividade 4 - Componentes
                </Link>
                <Link to="/atividade5" className="link-button">
                    Atividade 5 - Interatividade
                </Link>
            </div>
            <div style={{ marginTop: "20px", textAlign: "left" }}>
                <a
                    href="http://horvathstore.liberteti.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                    style={{
                        display: "block",
                        backgroundColor: "#fff",
                        color: "#0078d7",
                        textDecoration: "none",
                        padding: "15px",
                        borderRadius: "5px",
                        textAlign: "center",
                    }}
                >
                    <div style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                        Atividade 6 - Loja
                    </div>
                    <p style={{ fontSize: "0.9rem", margin: 0 }}>
                        Para fazer login na loja, utilize:
                        <br />
                        <strong>Email:</strong> joao.silva@example.com<br />
                        <strong>Senha:</strong> senha123
                        <br />
                        ou
                        <br />
                        <strong>Email:</strong> maria.oliveira@example.com<br />
                        <strong>Senha:</strong> 123maria
                    </p>
                </a>
            </div>
        </div>
    );
}
