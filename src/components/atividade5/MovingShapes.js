import React, { useState, useEffect } from "react";

export default function MovingShapes() {
    const [direction, setDirection] = useState("down"); // "down" ou "up"
    const [position, setPosition] = useState(50); // Percentual de posição vertical
    const [moving, setMoving] = useState(false); // Controle do movimento

    useEffect(() => {
        let interval;
        if (moving) {
            interval = setInterval(() => {
                setPosition((prev) => {
                    if (direction === "down" && prev < 100) return prev + 1;
                    if (direction === "up" && prev > 0) return prev - 1;
                    return prev;
                });
            }, 20); // Incremento suave
        }
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou pausar
    }, [moving, direction]);

    const toggleDirection = () => {
        if (position === 0) setDirection("down");
        else if (position === 100) setDirection("up");
        setMoving((prev) => !prev); // Alterna entre iniciar e pausar o movimento
    };

    return (
        <div
            style={{
                width: "400px",
                height: "400px",
                border: "2px solid black",
                backgroundColor: "white",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Botão de controle */}
            <button
                onClick={toggleDirection}
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    zIndex: 10,
                }}
            >
                {moving ? "Stop" : direction === "down" ? "Move Down" : "Move Up"}
            </button>

            {/* Quadrado fixo */}
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "purple",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Bolinha esquerda */}
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "purple",
                    borderRadius: "50%",
                    position: "absolute",
                    top: `${position}%`,
                    left: "25%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            {/* Bolinha direita */}
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "purple",
                    borderRadius: "50%",
                    position: "absolute",
                    top: `${position}%`,
                    right: "25%",
                    transform: "translate(50%, -50%)",
                }}
            />
        </div>
    );
}
