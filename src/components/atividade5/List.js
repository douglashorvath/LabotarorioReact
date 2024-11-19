import React, { useState } from "react";

export default function List() {
    const [inputValue, setInputValue] = useState("");
    const [sculptors, setSculptors] = useState([]);

    const handleAdd = () => {
        if (inputValue.trim() !== "") {
            setSculptors([...sculptors, inputValue]);
            setInputValue(""); // Limpa o campo de entrada
        }
    };

    const handleDelete = (indexToDelete) => {
        setSculptors(sculptors.filter((_, index) => index !== indexToDelete));
    };

    const handleOrder = () => {
        setSculptors((prevSculptors) => [...prevSculptors].sort());
    };

    const handleReverse = () => {
        setSculptors((prevSculptors) => [...prevSculptors].reverse());
    };

    return (
        <div style={{ margin: "20px 0", textAlign: "left", maxWidth: "400px" }}>
            <h2>Inspiring Sculptors</h2>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Add a sculptor..."
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        flex: "1",
                        maxWidth: "250px", // Limita o tamanho do campo de texto
                        marginRight: "10px",
                    }}
                />
                <button
                    onClick={handleAdd}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        maxWidth: "100px", // Limita o tamanho do botão
                    }}
                >
                    Add
                </button>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <button
                    onClick={handleOrder}
                    style={{
                        padding: "5px 10px",
                        backgroundColor: "#28a745",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Order
                </button>
                <button
                    onClick={handleReverse}
                    style={{
                        padding: "5px 10px",
                        backgroundColor: "#ffc107",
                        color: "black",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Reverse
                </button>
            </div>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                {sculptors.map((sculptor, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "5px",
                        }}
                    >
                        <span>{sculptor}</span>
                        <button
                            onClick={() => handleDelete(index)}
                            style={{
                                padding: "5px 10px",
                                backgroundColor: "#dc3545",
                                color: "#fff",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                maxWidth: "80px", // Limita o tamanho do botão
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
