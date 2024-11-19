import React from "react";

export default function ConditionalRendering({ isVisible }) {
    return <p>{isVisible ? "O componente está visível!" : "O componente está oculto."}</p>;
}
