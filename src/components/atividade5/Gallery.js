import React, { useState } from "react";
import monalisa from "../../assets/monalisa.jpg";
import venus from "../../assets/venus.jpg";
import noite from "../../assets/noite.jpg";
import ultimaceia from "../../assets/ultimaceia.jpg";
import guernica from "../../assets/guernica.jpg";

const artPieces = [
    {
        title: "Mona Lisa",
        details: "A obra mais famosa de Leonardo da Vinci, finalizada por volta de 1503.",
        image: monalisa,
    },
    {
        title: "O Nascimento de Vênus",
        details: "Uma pintura de Sandro Botticelli criada por volta de 1485.",
        image: venus,
    },
    {
        title: "A Noite Estrelada",
        details: "Uma pintura de Vincent van Gogh criada em 1889.",
        image: noite,
    },
    {
        title: "A Última Ceia",
        details: "Uma obra de Leonardo da Vinci pintada entre 1495 e 1498.",
        image: ultimaceia,
    },
    {
        title: "Guernica",
        details: "Uma obra de Pablo Picasso criada em 1937, retratando os horrores da guerra.",
        image: guernica,
    },
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artPieces.length);
        setShowDetails(false); // Oculta os detalhes ao mudar de slide
    };

    const toggleDetails = () => {
        setShowDetails((prev) => !prev);
    };

    const currentPiece = artPieces[currentIndex];

    return (
        <div style={{ margin: "20px 0", textAlign: "left" }}>
            <button
                onClick={nextSlide}
                style={{
                    marginBottom: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Next
            </button>
            <h2>
                {currentPiece.title} ({currentIndex + 1} de {artPieces.length})
            </h2>
            <div>
                <button
                    onClick={toggleDetails}
                    style={{
                        marginBottom: "10px",
                        padding: "10px 20px",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>
                {showDetails && <p style={{ marginBottom: "10px" }}>{currentPiece.details}</p>}
            </div>
            <img
                src={currentPiece.image}
                alt={currentPiece.title}
                style={{
                    marginTop: "10px",
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
            />
        </div>
    );
}
