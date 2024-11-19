import React from "react";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Counter from "./Counter";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import MovingDot from "./MovingDot";
import MovingShapes from "./MovingShapes";
import CounterList from "./CounterList";
import BucketList from "./BucketList";

export default function Atividade5() {
    return (
        <div style={{ padding: "20px", textAlign: "left" }}>
            <h1>Atividade 5 - Interatividade</h1>

            <h2>Toolbar</h2>
            <Toolbar />

            <h2>Galeria</h2>
            <Gallery />

            <h2>Counter</h2>
            <Counter />

            <h2>Form1</h2>
            <Form1 />

            <h2>Form2</h2>
            <Form2 />

            <h2>Form3</h2>
            <Form3 />

            <h2>List</h2>
            <List />

            <h2>MovingDot</h2>
            <MovingDot />

            <h2>MovingShapes</h2>
            <MovingShapes />

            <h2>CounterList</h2>
            <CounterList />

            <h2>BucketList</h2>
            <BucketList />
            
        </div>
    );
}
