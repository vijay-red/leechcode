describe('My First Test', () => {
  it('Should redirect to localhost:4200/home', () => {
    cy.visit('/');
    cy.url().should('includes','home');
  })
  it('Should have the problem list and create problem tabs on the problem list page', () => {
    cy.visit('/admin/problemlist');
    cy.url().should('includes','problemlist');
    cy.contains('Problem List');
    cy.contains('Create Problem');
  })
  it('Should have the problem list and create problem tabs on the create page', () => {
    cy.visit('/admin/createproblem');
    cy.url().should('includes','createproblem');
    cy.contains('Problem List');
    cy.contains('Create Problem');
  })
  it('Should display the corresponding page for the Two Sum Problem', () => {
    cy.visit('/problem/two-sum');
    cy.url().should('includes','two-sum');
    cy.contains('Given an array of integers');
    cy.contains('Easy');
  })
  it('Should display the corresponding page for the Coin Change Problem', () => {
    cy.visit('/problem/coin-change');
    cy.url().should('includes','coin-change');
    cy.contains('You are given an integer array');
    cy.contains('Medium');
  })
  it('Should display the corresponding page for the Add Two Numbers Problem', () => {
    cy.visit('/problem/add-two-numbers');
    cy.url().should('includes','add-two-numbers');
    cy.contains('The digits are stored in reverse order');
    cy.contains('It is guaranteed that the list');
  })
  it('Should display the update page corresponding to a certain problem', () => {
    cy.visit('/admin/updateproblem/two-sum');
    cy.url().should('includes','two-sum');
    cy.contains('Update Problem');
    cy.contains('Hints');
  })

})
