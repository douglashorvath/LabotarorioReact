import React, { useState } from "react";

export default function Form3() {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [city, setCity] = useState("");
    const [image, setImage] = useState("");

    return (
        <div style={{ margin: "20px 0", textAlign: "left" }}>
            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <label htmlFor="name" style={{ width: "100px" }}>
                    Name:
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "200px",
                    }}
                />
            </div>

            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <label htmlFor="title" style={{ width: "100px" }}>
                    Title:
                </label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "200px",
                    }}
                />
            </div>

            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <label htmlFor="city" style={{ width: "100px" }}>
                    City:
                </label>
                <input
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "200px",
                    }}
                />
            </div>

            <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
                <label htmlFor="image" style={{ width: "100px" }}>
                    Image:
                </label>
                <input
                    id="image"
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    style={{
                        padding: "5px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        width: "200px",
                    }}
                />
            </div>

            <div style={{ marginTop: "20px" }}>
                <strong>
                    {title && name && city
                        ? `${title} by ${name} (located in ${city})`
                        : "Artwork information will appear here"}
                </strong>
                {image && (
                    <div style={{ marginTop: "10px" }}>
                        <img
                            src={image}
                            alt={title || "Artwork"}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "300px",
                                borderRadius: "5px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
