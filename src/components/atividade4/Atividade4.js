import React from "react";
import Gallery from "./Example1/Gallery";
import ConditionalRendering from "./Example2/ConditionalRendering";
import ListRendering from "./Example2/ListRendering";
import JSXExamples from "./Example3/JSXExamples";
import PropsExample from "./Example3/PropsExample";

export default function Atividade4() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Atividade 4 - Componentes</h1>

            <h2>Exemplo 1: Galeria de Perfis</h2>
            <Gallery />

            <h2>Exemplo 2: Renderização Condicional</h2>
            <ConditionalRendering isVisible={true} />

            <h2>Exemplo 2: Renderização de Lista</h2>
            <ListRendering />

            <h2>Exemplo 3: JSX</h2>
            <JSXExamples />

            <h2>Exemplo 3: Props</h2>
            <PropsExample />
        </div>
    );
}
