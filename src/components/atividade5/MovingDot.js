import React, { useState } from "react";

export default function MovingDot() {
    const [position, setPosition] = useState({ x: 200, y: 200 }); // Inicializa no centro

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect(); // Sempre pega o contêiner como referência
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                width: "400px",
                height: "400px",
                border: "2px solid black",
                backgroundColor: "lightgray",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: `${position.y - 10}px`, // Centraliza a bolinha no mouse
                    left: `${position.x - 10}px`, // Centraliza a bolinha no mouse
                    width: "20px",
                    height: "20px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                }}
            />
        </div>
    );
}
