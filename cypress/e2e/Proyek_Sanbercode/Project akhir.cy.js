describe ('scenario login', () => {
      
        it('Login_001-loginValid', () => {
            cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/images/ohrm_logo.png')
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
           
            
            cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
            cy.xpath("//input[@placeholder='Password']").type('admin123');
            cy.wait(2000);
            
            cy.xpath("//button[normalize-space()='Login']").should('be.visible')
            cy.xpath("//button[normalize-space()='Login']").click()
            cy.url().should('include', '/dashboard');
            
    })
    })