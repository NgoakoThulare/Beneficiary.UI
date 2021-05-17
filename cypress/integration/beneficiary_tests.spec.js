describe('Test beneficiaries', function () {

    //1st Test
    it('Test #1 - Type in beneficiary details', function () {
      cy.visit('http://localhost:4200/')
  
      cy.get('#name-input').type('Cypress Automation');
      
      cy.get('#accountNumber-input').type('0000000000');

      cy.get('#reference-input').type('Cypress AUtomation Testing Reference');
    })

    //2nd Test
    it('Test #2 - Create beneficiary', function () {
        
        cy.get('#create-btn').click();
      })
  
  });
  
  