/// <reference types="Cypress"/>

describe('Mitigate Risk Web Application Authentication', () => {
  it('Logo images should be visible', () => {
    cy
      .visit('https://mitigateriskuat.baobabtesting.com/')

    cy
      .get('img')
      .should('be.visible')

  })

  it('login form fields should be visible', () => {
    cy
      .visit('https://mitigateriskuat.baobabtesting.com/')

    cy
      .get('.sc-bXCLTC')
      .should('be.visible')
  })

  it('Validate sign in form fields', () => {
    cy
      .visit('https://mitigateriskuat.baobabtesting.com/')

      cy
        .get('[data-testid="Email"]')
        .should('be.empty')

      cy
        .get('[name="password"]')
        .should('be.empty')

    cy
      .get('.sc-eeDRCY')
      .click()
      
    cy
      .get('.sc-dAlyuH.bnGnEl')
      .should('have.text', 'Email or username is requiredPassword is required')

  })

    it('Sign in with an invalid email/username and invalid password', () => {
      cy
        .visit('https://mitigateriskuat.baobabtesting.com/')

      cy
        .get('[data-testid="Email"]').type('invalid@email.com')

      cy
        .get('[name="password"]').type('passw')

      cy
        .get('.sc-eeDRCY')
        .click().wait(2000)

      cy
        .get('.Toastify__toast-body')
        .should('be.visible')
    })

    it('Sign in with a valid email/username and invalid password', () => {
      cy
        .visit('https://mitigateriskuat.baobabtesting.com/')

      cy
        .get('[data-testid="Email"]').type('fidelis+123@baobabpartners.com')

      cy
        .get('[name="password"]').type('passw')

      cy
        .get('.sc-eeDRCY')
        .click()

      cy
        .get('.Toastify__toast-body')
        .should('be.visible')

    })
    
    it('Signin with an invalid email/username and valid password', () => {
      cy
        .visit('https://mitigateriskuat.baobabtesting.com/')

  
        .get('[data-testid="Email"]').type('invalid@email.com')

      cy
        .get('[name="password"]').type('@1234mAMa')

      cy
        .wait(2000)

      cy
        .get('.sc-jlZhew.dsBNbw').click()


      cy
        .get('.sc-eeDRCY')
        .click().wait(2000)

      cy
        .get('.Toastify__toast-body')
        .should('be.visible')

      })

    it('Verify that password length is 8 min', () => {
      cy.visit('https://mitigateriskuat.baobabtesting.com/')

      cy
        .get('[data-testid="Email"]').type('invalid@email.com')

      cy
        .get('[name="password"]').type('@1234mAM')
        .invoke('val')
        .should('have.length', 8)

    })
    
    it('Verify that password character combination criteria matches', () => {
      cy
        .visit('https://mitigateriskuat.baobabtesting.com/')

      cy
        .get('[data-testid="Email"]').type('fidelis+123@baobabpartners.com')

      cy
        .get('[name="password"]').type('1234Papa!')
        
  
        const password = '1234Papa!';
        const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        expect(pattern.test(password)).to.be.true;

      cy
        .get('.sc-jlZhew.dsBNbw').click()


    })
    
    it('Verify forgot password function works', () => {
      cy
        .visit('https://mitigateriskuat.baobabtesting.com/')

        cy
          .get('.sc-bmzYkS.giFCYi')
          .click()
          
        cy
          .get('[label="Email"]')
          .should('be.visible')
          .type('invalid@email.com@EMAIL')

        cy.get('.sc-eeDRCY.ecMfbb').click().wait(2000)

        cy
          .get('span[name="ErrorMsg"]')
          .should('have.text', 'Invalid email address')

        cy
          .visit('https://mitigateriskuat.baobabtesting.com/')
  
          cy
            .get('.sc-bmzYkS.giFCYi')
            .click()
            
          cy
            .get('[label="Email"]')
            .should('be.visible')
            .type('fidelis@baobabpartners.co')
  
          cy.get('.sc-eeDRCY.ecMfbb').click().wait(2000)

        cy
          .get('.sc-eeDRCY.ecMfbb').click().wait(2000)
          cy.get('.Toastify__toast-body')
          .should('be.visible')
          .should('have.text', 'Email does not exist in database, confirm the email and try again')

        cy
          .visit('https://mitigateriskuat.baobabtesting.com/')
        cy
          .get('.sc-bmzYkS.giFCYi')
          .click()
          
        cy
          .get('[label="Email"]')
          .should('be.visible')
          .type('fidelis+123@baobabpartners.com')

        cy
          .get('.sc-eeDRCY.ecMfbb').click().wait(2000)

        cy
          .get('.sc-kOPcWz.ksLnCT')
          .should('have.text', "Proceed to login")
    })

          
    it('Sign in with an invalid email/username and invalid password', () => {
      cy.visit('https://mitigateriskuat.baobabtesting.com/')

      cy
        .get('[data-testid="Email"]').type('fidelis+123@baobabpartners.com')

      cy
        .get('[name="password"]').type('1234Papa!')


      
        cy.get('.sc-eeDRCY.ecMfbb').click().wait(6000)

        cy
          .get('.sc-kpKSZj')
          .should('be.visible')

    })
    
    
    it('Verify logout button logs user out of the web app', () => {
      cy.visit('https://mitigateriskuat.baobabtesting.com/')

        cy
          .get('[data-testid="Email"]').type('fidelis+123@baobabpartners.com')
  
        cy
          .get('[name="password"]').type('1234Papa!')
  
  
        
          cy.get('.sc-eeDRCY.ecMfbb').click()
            .wait(6000)

          cy
            .get('.sc-bWJUgm > .sc-ijDOKB > .sc-iaJaUu > .sc-feoqov > .sc-gVJvzJ > .sc-dOoqMo > .ml-3')
            .click()

            cy.get('.sc-bXCLTC.gGQLGm')
            .should('be.visible')


    })
    
//     it('Verify User can Update password within the web app', () => {
//       cy.visit('https://mitigateriskuat.baobabtesting.com/')
//     })
})