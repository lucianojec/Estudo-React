import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";
export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#04 Aleatorios">
        <Aleatorio min={1} max={100}></Aleatorio>u
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 Situação do Aluno">
        <ComParametro aluno="Pedro" nota={9.3} />
      </Card>

      <Card titulo="#01 Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
