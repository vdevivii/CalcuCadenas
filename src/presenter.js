import sumar from "./sumador";

const inputCadena = document.querySelector("#cadena");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadena = inputCadena.value;
  const resultado = sumar(cadena);

  div.innerHTML = "<p>" + resultado + "</p>";
});
