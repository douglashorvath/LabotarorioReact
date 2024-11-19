import React, { useState } from "react";

export default function CounterList() {
    // Lista de contadores inicializados com 0
    const [counters, setCounters] = useState([0, 0, 0]);

    const incrementCounter = (index) => {
        setCounters((prevCounters) =>
            prevCounters.map((count, i) => (i === index ? count + 1 : count))
        );
    };

    return (
        <div style={{ margin: "20px 0", textAlign: "left", maxWidth: "400px" }}>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {counters.map((count, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px", // Aproxima o botão do número
                            marginBottom: "5px",
                        }}
                    >
                        <span>{count}</span>
                        <button
                            onClick={() => incrementCounter(index)}
                            style={{
                                padding: "5px 10px",
                                backgroundColor: "#007BFF",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            +
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
