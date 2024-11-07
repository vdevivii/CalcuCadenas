describe("Calculadora de Cadena", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("debería mostrar el resultado de la suma para una cadena con un solo número", () => {
    cy.get("#cadena").type("2");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "2");
  });

  it("debería sumar números separados por coma", () => {
    cy.get("#cadena").type("1,2,4,8");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "15");
  });

  it("debería sumar números separados por comas y guiones", () => {
    cy.get("#cadena").type("1-2,3");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "6");
  });

  it("debería ignorar números mayores a 1000", () => {
    cy.get("#cadena").type("2,1001");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "2");
  });

});

