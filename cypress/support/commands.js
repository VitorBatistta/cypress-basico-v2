Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {

    cy.get('#firstName').type("Vítor")
    cy.get('#lastName').type("Batista")
    cy.get('#email').type("vitor.batista@email.com")
    cy.get('#open-text-area').type('teste' )
    cy.contains('button', 'Enviar').click()


})