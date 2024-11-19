import React from "react";

function AlertButton({ message, children }) {
    return (
        <button
            onClick={() => alert(message)}
            style={{
                marginRight: "10px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div style={{ textAlign: "left", marginBottom: "20px" }}>
            <AlertButton message="Playing!">Play Movie</AlertButton>
            <AlertButton message="Uploading!">Upload Image</AlertButton>
        </div>
    );
}
