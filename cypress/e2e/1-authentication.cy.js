/// <reference types="Cypress"/>

describe('Mitigate Risk Web Application Authentication', () => {

  beforeEach(() => {

    cy
    .visit('https://mitigateriskuat.baobabtesting.com/')

  })

  it('Logo images should be visible', () => {


    cy
      .get('img')
      .should('be.visible')

  })

  it('login form fields should be visible', () => {

      cy.get('form').find('input').should('be.visible').and('be.empty')

  })

  it('Validate sign in form fields', () => {

    cy.get('.sc-eeDRCY').click()
      
    cy.get('.sc-dAlyuH.bnGnEl').should('be.visible').and('have.length', 2)

    cy.get('.sc-dAlyuH.bnGnEl').eq(0).should('have.text', 'Email or username is required')

    cy.get('.sc-dAlyuH.bnGnEl').eq(1).should('have.text', 'Password is required')

  })

  it('Sign in with an invalid email/username and invalid password', () => {

      cy.get('form').find('[data-testid="Email"]').type('invalid@email.com')

      cy.get('form').find('[name="password"]').type('passw')

      cy.get('.sc-eeDRCY').click().wait(2000)

      cy.get('.Toastify__toast-body').should(
        'have.text', 'There was a problem logging in, Check your email/password or contact Admin')
  })

  it('Sign in with a valid email/username and invalid password', () => {

      cy.get('form').find('[data-testid="Email"]').type('fidelis+123@baobabpartners.com')

      cy.get('form').find('[name="password"]').type('passw')

      cy.get('.sc-eeDRCY') .click()

      cy.get('.Toastify__toast-body').should('be.visible').and(
          'have.text', 'There was a problem logging in, Check your email/password or contact Admin')

  })
    
  it('Sign in with an invalid email/username and valid password', () => {

      cy.get('form').find('[data-testid="Email"]').type('invalid@email.com')

      cy.get('form').find('[name="password"]').type('@1234mAMa')

      cy.wait(2000)

      //click to view password
      cy.get('.sc-jlZhew.dsBNbw').click()

      cy.get('.sc-eeDRCY').click().wait(2000)

      cy.get('.Toastify__toast-body').should('be.visible').and(
          'have.text', 'There was a problem logging in, Check your email/password or contact Admin')

  })

  it('Verify that password length is 8 min', () => {

      cy.get('form').find('[data-testid="Email"]').type(
        'invalid@email.com')

      cy.get('form').find('[name="password"]').type(
        '@1234mAM').invoke('val').should('have.length', 8)

  })
    
  it('Verify that password character combination criteria matches', () => {

      cy.get('[data-testid="Email"]').type('fidelis+123@baobabpartners.com')

      cy.get('[name="password"]').type('1234Papa!')
        
        const password = '1234Papa!';
        const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        expect(pattern.test(password)).to.be.true;

      cy.get('.sc-jlZhew.dsBNbw').click()


  })
    
  it('Verify forgot password function works', () => {

      cy.get('.sc-bmzYkS.giFCYi').click()
          
      cy.get('form').find('[label="Email"]').type(
        'fidelis+123@baobabpartners.com')

      cy.get('.sc-eeDRCY.ecMfbb').click().wait(2000)

      cy.get('.sc-kOPcWz.ksLnCT').should('have.text', "Proceed to login")
  })

          
  it('Sign in with a valid email/username and password', () => {

      cy.get('form').find('[data-testid="Email"]').type(
        'fidelis+123@baobabpartners.com')

      cy.get('form').find('[name="password"]').type('1234Papa!')

      cy.get('.sc-eeDRCY.ecMfbb').click().wait(2000)

      cy.get('.Toastify__toast-body').should('be.visible').and('have.text', 'You have successfully logged in')

  })
    
    
  it('Verify logout button logs user out of the web app', () => {

      cy.get('form').find('[data-testid="Email"]').type(
        'fidelis+123@baobabpartners.com')
  
      cy.get('form').find('[name="password"]').type(
        '1234Papa!')
  
      cy.get('.sc-eeDRCY.ecMfbb').click().wait(2000)

      cy.contains('Logout').click()

      cy.get('.sc-jsJBEP').should('have.text', 'Log In')

    })
    
//     it('Verify User can Update password within the web app', () => {
//       cy.visit('https://mitigateriskuat.baobabtesting.com/')
//     })
})