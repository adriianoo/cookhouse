describe('authentication flow spec', () => {

  it('register test', () => {
    cy.visit('http://localhost:3000/register')
    cy.get('input[type="text"]').type('Max Mustermann');
    cy.get('input[type="email"]').type('testmail@hotmail.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('.signup-button').click()
  })

  it('login test', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[type="email"]').type('testmail@hotmail.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('.login-button').click()
  })

})