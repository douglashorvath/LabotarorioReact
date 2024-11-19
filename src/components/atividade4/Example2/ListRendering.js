import React from "react";

export default function ListRendering() {
    const items = ["React", "JavaScript", "CSS"];
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
