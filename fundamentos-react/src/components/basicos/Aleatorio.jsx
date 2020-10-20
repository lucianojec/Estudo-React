import React from "react";

export default (props) => {
  const { min, max } = props;

  var num;
  num = parseInt(Math.floor(Math.random() * (max - min + 1) + min));

  return (
    <div>
      <h2>Número Aleatorio</h2>
      <p>
        <strong>Valor Minimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong> {num}
      </p>
    </div>
  );
};
