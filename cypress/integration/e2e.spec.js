/// <reference types="cypress" />

describe('E2E tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('checks if link to repository is opening in a new tab', () => {
    cy.get('.GlEmu > a:nth-of-type(1)').should('have.attr', 'target', '_blank');
  });
  it('checks if the contact form is visible after "Contact me" click', () => {
    cy.get('.Intro___StyledButton-bAANjW').click();
    cy.get('#contact').should('be.visible');
  });
  it('checks if form validation works during typing', () => {
    cy.get(':nth-child(1) > .Input-eXLwAq').type('J{backspace}').blur();
    cy.get(':nth-child(1) > .styles__Error-MrfTy').should('be.visible').and('have.text', 'Full name field is required');

    cy.get(':nth-child(2) > .Input-eXLwAq').type('qwerty').blur();
    cy.get(':nth-child(2) > .styles__Error-MrfTy').should('be.visible').and('have.text', 'Invalid email');

    cy.get(':nth-child(3) > .Input-eXLwAq').type('D{backspace}').blur();
    cy.get(':nth-child(3) > .styles__Error-MrfTy').should('be.visible').and('have.text', 'Message field is required');
  });
});
