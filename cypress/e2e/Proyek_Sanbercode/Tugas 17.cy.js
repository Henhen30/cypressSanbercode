import loginPage from "../../support/pages/loginPage";


describe('test Login', () => {
  beforeEach(() => {
    loginPage.bukaHalamanWebsite();
  });

  it('1. Login berhasil dengan user dan password valid', () => {
    loginPage.isiUsername('Admin');
    loginPage.isiPassword('admin123');
    loginPage.klikTombolLogin();
    loginPage.verifikasiLoginBerhasil();
    cy.wait(3000); // 3000 milidetik = 3 detik

  });

  it('2. Login gagal dengan username salah', () => {
    loginPage.isiUsername('UserSalah');
    loginPage.isiPassword('admin123');
    loginPage.klikTombolLogin();
    loginPage.verifikasiLoginGagal();
    cy.wait(3000); // 3000 milidetik = 3 detik

    
  });

  it('3. Login gagal dengan password salah', () => {
    loginPage.isiUsername('Admin');
    loginPage.isiPassword('passwordSalah');
    loginPage.klikTombolLogin();
    loginPage.verifikasiLoginGagal();
    cy.wait(3000); // 3000 milidetik = 3 detik
  });

  it('4. Login gagal dengan field username kosong', () => {
    loginPage.isiPassword('admin123');
    loginPage.klikTombolLogin();
    cy.get('.oxd-input-field-error-message').should('contain', 'Required');
    cy.wait(3000); // 3000 milidetik = 3 detik
  });

  it('5. Login gagal dengan field password kosong', () => {
    loginPage.isiUsername('Admin');
    loginPage.klikTombolLogin();
    cy.get('.oxd-input-field-error-message').should('contain', 'Required');
    cy.wait(3000); // 3000 milidetik = 3 detik
  });
});
