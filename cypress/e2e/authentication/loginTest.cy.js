describe("Test for authentication module of the application", ()=>{
    it("Verify that if the Login page is loading", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })
    it("Verify that it is possible login with valid credentials", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('input[name=username]').type("Admin")
        cy.get('input[name=password]').type('admin123')
        cy.get('button[type=submit]').click()
    })
})