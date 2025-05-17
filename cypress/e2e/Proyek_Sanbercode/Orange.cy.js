
describe ('scenario login', () => {

    
         // valid login

        it('Login_001-loginValid', () => {
            cy.wait(2000);
            cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.xpath("//input[@placeholder='Username']").clear().type('Admin')
            cy.xpath("//input[@placeholder='Password']").type('admin123');
            cy.xpath("//button[normalize-space()='Login']").click()
            cy.url().should('include', '/dashboard');
            cy.wait(3000);
            
    })
        // Login dengan username yang tidak sesuai

        it('Login_002-logininValidUsername', () => {
            cy.wait(3000);
            cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.xpath("//input[@placeholder='Username']").clear().type('Admon');
            cy.xpath("//input[@placeholder='Password']").type('admin123');
            cy.xpath("//button[normalize-space()='Login']").click()
            cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should('contains.text','Invalid credentials')
            cy.wait(3000); 
            cy.get('.loading-spinner').should('not.exist');

            
    })
        // login tidak menggunakan username dan password

        it('Login_003-logininValidUsernamepassowrd', () => {
            cy.wait(3000);
            cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.xpath("//button[normalize-space()='Login']").click()
            cy.xpath("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]").should('contains.text','Required')
            cy.xpath("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]").should('contains.text','Required')
            cy.wait(3000); // tunggu 2 detik
            cy.get('.loading-spinner').should('not.exist');

    })
    

});

describe ('Forgotpassword',()=> {

    // Lupa password

    it('LupaPW_004-forgotpassowrd', () => {
            cy.wait(3000);
            cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
            cy.xpath("//input[@placeholder='Username']").clear().type('Admin');
            cy.xpath("//button[normalize-space()='Reset Password']").click()
            cy.wait(3000); // tunggu 2 detik
            cy.get('.loading-spinner').should('not.exist');

    })

});

describe('dashboard', () => {
 
    it('Dashboard', () => {
        cy.wait(3000);
            cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.xpath("//input[@placeholder='Username']").clear().type('Admin');
            cy.xpath("//input[@placeholder='Password']").type('admin123');
            cy.xpath("//button[normalize-space()='Login']").click()
            cy.get('h6').contains('Dashboard').should('be.visible');
            cy.xpath("//a[@href='/web/index.php/directory/viewDirectory']").click();
            

    })
    
});
