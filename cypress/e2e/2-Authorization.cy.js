/// <reference types="Cypress"/>

describe('Verify Authorization for MR WebApp', () => {

    beforeEach(() => {

        cy.visit("https://d2q01ssw38koby.cloudfront.net/");

        cy.get('[data-testid="Email"]').type(
            "CED-Zavia1");

        cy.get('[name="password"]').type("1234Mama!");

        cy.get(".sc-eeDRCY.ecMfbb").click().wait(2000);

        cy.contains('Users').click()

    })

    it('Validate the user creation fields', () => {

        cy.get("button.sc-dExYaf.sc-kqGoIF").click();

        cy.get('form').find('input').should("be.empty")
        
    })

    it('Verify User MRC/RS can be assigned Titles', () => {

        cy.get("button.sc-dExYaf.sc-kqGoIF").click();

        cy.get('form').find('[name="title"]').type("Registered Nurse").should(
            'have.value', 'Registered Nurse')

    })

    it('Verify User MRC/RS can be assigned to specific profile/role', () => {

        cy.get("button.sc-dExYaf.sc-kqGoIF").click();

        cy.get('form').find('[name="title"]').type("Regitered Nurse");

        cy.get('form').find('[name="firstName"]').type("Lilian");

        cy.get('form').find('[name="lastName"]').type("Rolex").wait(2000)

        cy.get('form').find('[type="submit"]').click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(0).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-4-option-0").should(
            "be.visible").click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(1).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-5-option-0").should(
            "be.visible").click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(2).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-6-option-0").click();

    })

    it('Verify MRA can invite Resident Staff (Users))', () => {

        cy.get("button.sc-dExYaf.sc-kqGoIF").click();

        cy.get('form').find('[name="title"]').type("Regitered Nurse");

        cy.get('form').find('[name="firstName"]').type("Reuben");

        cy.get('form').find('[name="lastName"]').type("Brown").wait(2000)

        cy.get('form').find('[type="submit"]').click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(0).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-4-option-1").should(
            "be.visible").click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(1).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-5-option-5").should(
            "be.visible").click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(2).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-6-option-3").should(
            "be.visible").click();

        cy.get(".sc-kbhJrz").should("be.visible");

        cy.get('.mt-8 > .sc-pKqro').should(
            "not.be.disabled").click();

        cy.contains("Complete").should("not.be.disabled");

        cy.contains("Continue").should("be.disabled");

        cy.contains("Complete").click();

        cy.contains("Continue").should("not.be.disabled").click();

        cy.get('[name="email"]').should("be.empty");

        cy.get("#validate").should("be.visible").and("not.be.checked");

        cy.contains("Continue").should("be.disabled");

        cy.get('[name="email"]').type("automate_test021@yopmail.com");

        cy.get("#validate").check().should("be.checked");

        cy.contains("Continue").should("not.be.disabled").click().wait(2000);

        cy.get(".font-inter").should("have.text", "User successfully added");


    })
    
    it('Verify MRC is able to create Resident Staff (RS) without email', () => {

        cy.get("button.sc-dExYaf.sc-kqGoIF").click();

        cy.get('form').find('[name="title"]').type("Dr.");

        cy.get('form').find('[name="firstName"]').type("Hardly");

        cy.get('form').find('[name="lastName"]').type("Chase").wait(2000)

        cy.contains('Continue').click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(0).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-4-option-0").should(
            "be.visible").click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(1).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-5-option-2").should(
            "be.visible").click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(2).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-6-option-0").click();

        cy.get(".sc-kbhJrz").should("be.visible");

        cy.get('.mt-8 > .sc-pKqro').click()

        cy.contains("Complete").click();

        cy.contains("Continue").click();

        cy.contains("Continue").click().wait(2000);

        cy.get(".font-inter").should("have.text", "User successfully added");

    

    })
    
    it("Verify Username/Email is unique ", () => {

        cy.get("button.sc-dExYaf.sc-kqGoIF").click();

        cy.get('[name="title"]').type("Regitered Nurse");

        cy.get('[name="firstName"]').type("Hardly");

        cy.get('[name="lastName"]').type("Chase");

        cy.get('[type="submit"]').should('be.disabled')

    })


    it('Verify MRC ia able to Edit User (RS) Profiles/Roles', () => {

        cy
            .get('.px-4.py-3 > [style="width: 20%; text-align: center; cursor: pointer;"] > svg').eq(4)
            .click()
        
        cy.get('.dcyZCV').eq(1).click()

        cy.contains('Edit').click()

        cy.get(".select__input-container").eq(1).click();

        cy.get("#react-select-5-option-4").click()

        cy.get(".select__input-container").eq(1).should(
            'not.have.value', 'Group Leader')

        cy.get(".select__input-container").eq(2).click();

        cy.get("#react-select-6-option-1").click()

        cy.get(".select__input-container").eq(2).should(
            'not.have.value', 'Activities Director')

        cy.get('.sc-kbhJrz > .mt-8 > .sc-pKqro').click()

        cy.contains('Update').click().wait(2000)
        
        cy.get('.Toastify__toast-body').should('have.text', 'User assignment successfully updated.!!!')

    })

    it('Edit User profile (MRC)-self', () => {

        cy.contains('Settings').should(
            'not.be.disabled').click()

        //Confirming disabled fields

        cy.get('form').find('input').should('be.disabled')
        
        //Edit button
        cy.contains('Edit').click()

        //Clearing fields contents
        cy.get('form').find('[name="title"]').clear().type('LRN')

        cy.get('form').find('[name="firstName"]').clear().type('Zaviana')

        //cy.get('form').find('[name="firstName"]').should('have.value', 'Zaviana')

        cy.get('form').find('[name="lastName"]').clear().type("Manny")

        cy.get('form').find('[name="email"]').clear().type(
            'fidelis+382@baobabpartners.com').should('not.be.empty')
        
        cy.get('form').find('[name="username"]').clear().type('zavaina01')

        //Replacing fields contents

            
        // cy.get('[name="lastName"]').type('Manny')
    
        // cy.get('[name="email"]').type(
        //     'fidelis+2800@baobabpartners.com').should(
        //         'have.value', 'fidelis+2800@baobabpartners.com')
            
        // cy.get('[name="username"]').type('newZAvia1').should(
        //     'have.value', 'newZavia1')

        //Update button
        // cy.get('.sc-dUWDJJ.sc-aNeao').click()

    })


    it('MRC is able to Delete User Roles/Permissions', () => {

        cy
            .get('.px-4.py-3 > [style="width: 20%; text-align: center; cursor: pointer;"] > svg').eq(2)
            .click()
        
        cy.get('.dcyZCV').eq(1).click()

        cy.contains('Delete').click()

        cy.get('.cURsjB').click()
        
        cy.get('.Toastify__toast-body').should('have.text', 'Facility deleted successfully!!!')

    })

    it('"Verify that MRC able to reset password for other users', () => {

        cy
        .get('.px-4.py-3 > [style="width: 20%; text-align: center; cursor: pointer;"] > svg').eq(4)
        .click()
    
        cy.get('.dcyZCV').eq(0).click()

        cy.get('.sc-iA-DsXs').click()

        cy.get('form').find('input').should('be.empty')

        cy.get('form').find('input').eq(0).type(
            '1234Phyl!')

        cy.get('form').find('input').eq(1).type(
            '1234Phyl!')

        cy.contains('Update').should('not.be.disabled').click()

        cy.get('.Toastify__toast-body').should(
            'have.text', 'User Password reset successful')

    })

})
