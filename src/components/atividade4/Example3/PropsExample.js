import React from "react";

function Avatar({ name, imageUrl }) {
    return (
        <div>
            <img src={imageUrl} alt={`${name}'s avatar`} width="50" height="50" />
            <p>{name}</p>
        </div>
    );
}

export default function PropsExample() {
    return (
        <div>
            <Avatar name="Alice" imageUrl="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg" />
            <Avatar name="Bob" imageUrl="https://st4.depositphotos.com/9998432/24359/v/450/depositphotos_243599464-stock-illustration-person-gray-photo-placeholder-man.jpg" />
        </div>
    );
}
