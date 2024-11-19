import React, { useState } from "react";

export default function Form1() {
    const [recipient, setRecipient] = useState("Alice");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        alert(`Mensagem para ${recipient}: "${message}"`);
    };

    return (
        <div style={{ margin: "20px 0", textAlign: "left" }}>
            <label htmlFor="recipient" style={{ display: "block", marginBottom: "10px" }}>
                To:
            </label>
            <select
                id="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                style={{
                    padding: "5px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    display: "block",
                    width: "100%",
                    maxWidth: "300px",
                }}
            >
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Charlie">Charlie</option>
            </select>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                style={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "100px",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                }}
            />
            <div>
                <button
                    onClick={handleSend}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}
