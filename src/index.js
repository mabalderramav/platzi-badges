// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const name = "Aldo";
const jsx = (
  <div>
    <h1>Hello, soy {name}</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
);
// const element = React.createElement("h1", {}, "Hola! Soy los children.");

const container = document.getElementById("app");
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
