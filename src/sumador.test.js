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

it("debería sumar cadena de números separados por coma", () => {
  expect(sumar("1,2,4,8")).toEqual(15);
});

it("debería sumar números separados por comas o guiones", () => {
  expect(sumar("1-2,3")).toEqual(6);
});

it("debería aceptar un delimitador personalizado", () => {
  expect(sumar("//[;]\n6;7;4")).toEqual(17);
});

it("debería ignorar números mayores a 1000", () => {
  expect(sumar("2,1001")).toEqual(2);
});
