// cypress/e2e/directorySearch.cy.js

import DirectoryPage from "../../support/pages/DirectoryPage";


describe('pencairan data karyawan pada menu directory', () => {
  beforeEach(() => {
    // Login
   
    DirectoryPage.login('Admin', 'admin123');
    cy.intercept('GET', '**/api/v2/directory/employees*').as('directoryLoad');
    DirectoryPage.goToDirectory();
    cy.wait('@directoryLoad');
    DirectoryPage.verifyDirectoryPage();
  });

  it(' pilih sesuai Location Texas R&D', () => {
    
    const location = 'Texas R&D'; 
    cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('searchRequest');
    DirectoryPage.selectLocation(location);
    DirectoryPage.clickSearchButton();
    cy.wait('@searchRequest');
    cy.wait(3000);

  });
  
it('pilih sesuai Location New York Sales Office',() =>{
    const location = 'New York Sales Office';
    cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('searchRequest');
    DirectoryPage.selectLocation(location);
    DirectoryPage.clickSearchButton();
    
});
    
});

