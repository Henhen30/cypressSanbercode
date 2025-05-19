
class DirectoryPage {
  login(username, password) {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }

  goToDirectory() {
    cy.get('a[href="/web/index.php/directory/viewDirectory"]').click();
  }

  verifyDirectoryPage() {
    cy.url().should('include', '/directory');
    cy.get('h6').should('contain.text', 'Directory');
  }



  selectLocation(location) {
    cy.get('.oxd-select-wrapper').eq(1).click();
    cy.get('.oxd-select-dropdown')
      .contains(location)
      .click();
  }

  clickSearchButton() {
    cy.get('button[type="submit"]').click();
  }

}

export default new DirectoryPage();
