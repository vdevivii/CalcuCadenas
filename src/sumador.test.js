import sumar from "./sumador.js";

describe("Sumar - Calculadora de cadena", () => {
  it("debería retornar 0 para una cadena vacía", () => {
    expect(sumar("")).toEqual(0);
  });
});