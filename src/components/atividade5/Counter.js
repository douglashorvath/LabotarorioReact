import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementByThree = () => {
        setCount((prevCount) => prevCount + 3);
    };

    return (
        <div style={{ margin: "20px 0", textAlign: "left", display: "flex", alignItems: "center" }}>
            <div
                style={{
                    padding: "10px 20px",
                    border: "2px solid black",
                    backgroundColor: "white",
                    fontSize: "1.5rem",
                    marginRight: "10px",
                    display: "inline-block",
                }}
            >
                {count}
            </div>
            <button
                onClick={incrementByThree}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                +3
            </button>
        </div>
    );
}
