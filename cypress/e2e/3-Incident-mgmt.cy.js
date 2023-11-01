/// <reference types="Cypress"/>

describe("Incident Management Suite", () => {
    beforeEach(() => {
        cy.visit("https://d2q01ssw38koby.cloudfront.net");

        cy.get('[data-testid="Email"]').type("ghc.ldube");

        cy.get('[name="password"]').type("1234Phyl!");

        cy.get(".sc-eeDRCY.ecMfbb").click().wait(2000);

        cy.contains("Incidents").click();
    });

    //Report incident button on the dashboard
    it('Verify Report Incident button is functional', () => {

        cy.contains('Report Incident').should(
            'not.be.disabled').click()

    })

    //Create an incident
    it("Verify incident creation", () => {
        //Select Facility, Resident, Incident type

        cy.get(".sc-boZgaH").should("be.visible");

        cy.get(".sc-dExYaf").click().wait(2000);

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(0).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-2-option-1").should("be.visible").click();

        // Click on the dropdown container to open the options
        cy.get(".select__input-container").eq(1).click();

        // Wait for the dropdown options to appear
        cy.get("#react-select-3-option-0").should("be.visible").click();

        cy.get(".sc-jGKxIK > :nth-child(3)").dblclick();

        //Patient Demographics tab
        cy.get('[name="Incident_Date_Time__c"]').type(
            "2023-10-21T12:22").should('be.visible')

        cy.get(".css-19bb58m").eq(0).click();

        cy.get("#react-select-6-option-0").click();

        cy.get("#Blood_Pressure_N_A__c").check().should('be.checked')

        cy.get("#Pulse_N_A__c").check().should('be.checked')

        cy.get("#Respiration_NA__c").check().should('be.checked')

        cy.get("#Cognition_Prior_to_Incident_NA__c").check().should(
            'be.checked')

        cy.get("#Cognition_After_Incident_NA__c").check().should(
            'be.checked')

        cy.get("#Cognition_After_Incident_NA__c").check();

        cy.get("#DON_Notified__c-radio-1").check().should(
            'be.checked')

        cy.get("#Administrator_Notified__c-radio-1").check().should(
            'be.checked')

        cy.get("#Has_Resident_Rep_been_notified__c-radio-1").check().should(
            'be.checked')

        cy.get(".sc-gFAWRd > .sc-fBdRDi").click();

        cy.get(".Toastify__toast-body").should("be.visible");

        cy.get('[name="ErrorMsg"]').should("be.visible").and("have.length", "2");

        cy.wait(2000);

        cy.get("#Supervisor_Notified__c-radio-1").check();

        cy.get('[name="Explain_why_resident_rep_not_notified__c"]').type(
        "Somthing has to be said here. no skipping"
        ).and('not.be.empty')

        cy.get('span.mr-3 img').eq(0).should("be.visible");

        cy.get(".sc-gFAWRd > .sc-fBdRDi").click();

        //Details Tab
        cy.get("#Place_of_incident_not_listed__c").check();

        cy.get('[name="Place_of_Incident_if_not_listed__c"]').type(
        "No reason at all"
        );

        cy.get(
        ":nth-child(2) > .sc-fxwrCY > .sc-gsFSXq > .css-13eoz9p-container > .css-1czmujb-control > .css-qd2frc"
        ).click();

        cy.get("#react-select-11-option-0").click();

        cy.get(".css-8mmkcg").eq(1).click();

        cy.get("#react-select-12-option-0").click();

        cy.get("#Resident_Choked_On__c-checkbox-0").check().should(
            'be.checked')

        cy.get('[name="Describe_Food_and_Consistency__c"]').type(
        "Something good here"
        );

        cy.get('[name="Position_of_Resident__c"]').type(
        "Something good here again"
        );

        cy.get("#Was_Choking_Witnessed__c-radio-0").check().should(
            'be.checked')

        cy.get("#Symptoms_during_choking__c-checkbox-1").check().should(
            'be.checked')

        cy.get(".sc-kpDqfm").type("Eberechukwu Christian");

        cy.get(".css-8mmkcg").eq(2).click();

        cy.get("#react-select-13-option-2").click();

        cy.get("#Choking_Eating_Aids__c-checkbox-1").check().should(
            'be.checked')

        cy.get("#Injuries_found__c-radio-1").check().should(
            'be.checked')

        cy.get("#Physician_Notified__c-radio-1").check().should(
            'be.checked')

        cy.get(":nth-child(2) > .sc-fxwrCY > .sc-gsFSXq > .sc-bBeLUv").type(
        "Ogechukwu achop CHOP"
        );

        cy.get("#Ambulance_called__c-radio-1").check().should(
            'be.checked')

        cy.get(":nth-child(2) > .sc-gsFSXq > .sc-bBeLUv").type("Balanced Diet");

        cy.get("#Sent_to_Acute_Care_Facility__c-radio-1").check().should(
            'be.checked')

        cy.get(":nth-child(7) > .sc-fxwrCY > .sc-gsFSXq > .sc-bBeLUv").type(
        "Young Fanthom"
        );

        cy.get('span.mr-3 img').eq(1).should("be.visible")

        cy.contains("Next").click();

        //Factors Tab
        cy.get('#Compliance_With_Diet__c-radio-2').check().should(
            'be.checked')

        cy.get('#Nutritional_Intake__c-checkbox-1').check().should(
            'be.checked')

        cy.get('span.mr-3 img').eq(2).should("be.visible")

        cy.contains('Next').click()

        //Statements Tab
        cy.get('#Care_Provided_Prior_to_Incident__c-checkbox-1').check().should(
            'be.checked')

        cy.get('[name="Nurse_Name_Text__c"]').type('Nurse Jemaima')

        cy.get(':nth-child(2) > .sc-fxwrCY > .sc-gsFSXq > .sc-bBeLUv').type(
            'My statement is straight to the point')

            //Add interviews in the Statement tab
            // cy
            //     .get('.border').click()

            // cy
            //     .get(':nth-child(1) > .sc-gsFSXq > .css-13eoz9p-container > .css-1czmujb-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer')
            //     .click()

            // cy
            //     .get('#react-select-19-option-0').click().wait(1000)

            // cy
            //     .get('[name="Interviews__c[0].Interviewer_s_Name_Not_Listed__c"]').check()

            // cy
            //     .get('.sc-dZoequ').type('Mama John Bosco')

            // cy
            //     .get(':nth-child(3) > .sc-gsFSXq > .css-13eoz9p-container > .css-1czmujb-control > .css-1wy0on6 > .css-1xc3v61-indicatorContainer')
            //     .click()

            // cy
            //     .get('#react-select-20-option-1').click()

            // cy
            //     .get('[name="Interviews__c[0].Interviewee_s_Name_Not_Listed__c"]').check()

            // cy
            //     .get('[name="Interviews__c[0].Interviewee_s_Name_Text__c"]')
            //     .type('Some Passer by')

            // cy
            //     .get('.sc-ihgnxF').type('2023-09-29T05:22')

            // cy
            //     .get('[name="Interviews__c[0].Interviewee_Statement__c"]')
            //     .type('This is a serious matter')

            // cy
            //     .get('button.sc-hRJfrW').click()

        cy.get('span.mr-3 img').eq(3).should("be.visible")

        cy.contains('Next').should('not.be.disabled').click()

        //Response Tab
        cy.get('#Documentation_Assessments__c-checkbox-0').should(
            'not.be.checked').check().should('be.checked')

        cy.get('#Changes_Noted_Upon_Assessment__c-radio-1').should(
            'not.be.checked').check().should('be.checked')

        cy .get('[name="Additional_Findings__c"]').type(
            'this is the additonal findings')

        cy.get('#Equipment_Modification__c-checkbox-2').should(
            'not.be.checked') .check().should('be.checked')

        cy.get('#Chair_Modifications__c-checkbox-4').should(
            'not.be.checked').check().should('be.checked')

        cy.get('#Bed_Modifications__c-checkbox-0').should(
            'not.be.checked').check().should('be.checked')

        cy.get('#Call_Bell__c-checkbox-2').should(
            'not.be.checked').check().should('be.checked')
                
        cy.get('#Behavior_Modification__c-checkbox-1').should(
            'not.be.checked').check().should('be.checked')

        cy.get("#Nutritional_Support__c-checkbox-2").should(
            "not.be.checked").check().should("be.checked");

        cy.get('.css-qd2frc').eq('0').click()

        cy.get('#react-select-19-option-0').click()

        cy.get('span.mr-3 img').eq(4).should("be.visible")

        cy.contains('Submit').click().wait(2000)

        cy.get('.Toastify__toast-body').should('be.visible')

        })

    //Edit an Incident
    it.only('Verify user can edit an Incident', () => {

        cy.get('.px-4.py-3 > [style="width: 20%; text-align: center; cursor: pointer;"] > svg').eq('1').click()

    })

    it('Verify User can Navigate to Draft page', () => {
        
        cy.get('.dcyZCV').should('be.visible').click()

        cy.get('.dcyZCV').click()
    
    })

    it('Verify User can Filter incident by date', () => {
        
        cy.get('.mr-2 > .sc-bhqpjJ > .sc-hGMjit').type('2023-05-23')

        cy.get(':nth-child(2) > .sc-bhqpjJ > .sc-hGMjit').type('2023-08-23')
    
    })

});
