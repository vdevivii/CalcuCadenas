import sumar from "./sumador.js";

describe("Sumar - Calculadora de cadena", () => {
  it("debería retornar 0 para una cadena vacía", () => {
    expect(sumar("")).toEqual(0);
  });
});

it("debería retornar el mismo número para una cadena con un solo número", () => {
  expect(sumar("2")).toEqual(2);
});

it("debería sumar dos números separados por coma", () => {
  expect(sumar("1,2")).toEqual(3);
});
