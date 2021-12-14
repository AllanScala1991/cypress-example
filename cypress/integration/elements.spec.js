/// <reference types="cypress" />

describe("Elements Tests", () => {

    before(() => {
        cy.visit("https://demoqa.com/elements")
    })

    it("Should validate text box" , () => {
        const types = {
            username: "any_name",
            email: "any_email@mail.com",
            currentAddress: "any address, 999",
            permanetAddress: "any permanent address"
        }
        
        cy.get("#item-0")
        .should("be.visible")
        .click()

        cy.get("#userName")
        .should("be.visible")
        .type(types.username)

        cy.get("#userEmail")
        .should("be.visible")
        .type(types.email)

        cy.get("#currentAddress")
        .should("be.visible")
        .type(types.currentAddress)

        cy.get("#permanentAddress")
        .should("be.visible")
        .type(types.permanetAddress)

        cy.get("#submit")
        .click()

        cy.get("#output").should("be.visible")
        cy.get("#name").should("contain.text",types.username)
        cy.get("#email").should("contain.text",types.email)
        cy.get("#currentAddress").should("contain.value",types.currentAddress)
        cy.get("#permanentAddress").should("contain.value",types.permanetAddress)
    })

    it("Should validate check box", () => {
        cy.get("#item-1")
        .should("be.visible")
        .click()

        cy.get(".rct-collapse-btn")
        .click()

        cy.get(".rct-collapse-btn")
        .should("be.visible")
        .each((element, index) => {
            if(index != 0){
                cy.get(".rct-collapse-btn")
                .eq(index)
                .click()
            }
        })

        cy.get('.rct-icon-uncheck')
        .should('be.visible')

        cy.get(".rct-checkbox")
        .should("be.visible")
        .eq(0)
        .click()

        cy.get('.rct-icon-check')
        .should('be.visible')

    })

    it("Should validate radio buttons", () => {
        cy.get("#item-2")
        .should("be.visible")
        .click()

        cy.get('#yesRadio')
        .click({force: true})

        cy.get('.text-success')
        .should('have.text', "Yes")

        cy.get('#impressiveRadio')
        .click({force: true})

        cy.get('.text-success')
        .should('have.text', "Impressive")
    })

    it("Should validate buttons", () => {
        cy.get("#item-4")
        .should("be.visible")
        .click()

        cy.get('#doubleClickBtn')
        .dblclick()

        cy.get('#doubleClickMessage')
        .should('be.visible')

        cy.get('#rightClickBtn')
        .rightclick()

        cy.get('#rightClickMessage')
        .should('be.visible')

        cy.get('.mt-4 button')
        .eq(3)
        .click()

        cy.get('#dynamicClickMessage')
        .should('be.visible')
    })
})