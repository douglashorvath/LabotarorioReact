import React from "react";

export default function BucketList() {
    const myList = [
        "Mona Lisa - Louvre",
        "The Starry Night - MoMA",
        "The Last Supper - Milan",
        "The Persistence of Memory - MoMA",
        "The Scream - Oslo",
    ];

    const yourList = [
        "Girl with a Pearl Earring - The Hague",
        "Guernica - Madrid",
        "The Birth of Venus - Florence",
        "American Gothic - Chicago",
        "The Kiss - Vienna",
    ];

    return (
        <div style={{ margin: "20px 0", textAlign: "left", maxWidth: "600px" }}>
            <h2>Art Bucket List</h2>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                {/* My List */}
                <div>
                    <h3>My List of Art to See</h3>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                        {myList.map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "10px",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    style={{
                                        marginRight: "10px",
                                    }}
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Your List */}
                <div>
                    <h3>Your List of Art to See</h3>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                        {yourList.map((item, index) => (
                            <li
                                key={index}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginBottom: "10px",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    style={{
                                        marginRight: "10px",
                                    }}
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
