describe('template spec', () => {
  it('Testing app flow', function() {
    cy.visit('http://localhost:4200/list-heroes');
    cy.get('.list-md > :nth-child(1)').click({force: true});
    cy.get('.header-md > .toolbar-title-default > .title-default').should('have.value', '');
  });
})