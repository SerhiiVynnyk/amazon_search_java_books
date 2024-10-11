export class Actions {
  static selectFromDropdown(dropdown, value) {
    cy.get(dropdown)
      .select(value, { force: true });
  }

  static typeText(locator, value) {
    cy.get(locator)
      .type(value);
  }

  static clickElementByLocator(locator) {
    cy.get(locator)
      .click();
  }

  static clickNestedElemByLocator(locator, nested){
    cy.get(locator)
      .find(nested)
      .click();
  }
}