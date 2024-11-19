import React, { useState } from "react";

export default function Form2() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div style={{ margin: "20px 0", textAlign: "left" }}>
            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <label htmlFor="firstName" style={{ width: "100px" }}>
                    First Name:
                </label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "200px", /* Define largura menor */
                    }}
                />
            </div>

            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <label htmlFor="lastName" style={{ width: "100px" }}>
                    Last Name:
                </label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "200px", /* Define largura menor */
                    }}
                />
            </div>

            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <label htmlFor="email" style={{ width: "100px" }}>
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "200px", /* Define largura menor */
                    }}
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <strong>
                    {firstName && lastName
                        ? `${firstName} ${lastName}`
                        : "Full Name will appear here"}
                    {email && ` (${email})`}
                </strong>
            </div>
        </div>
    );
}
