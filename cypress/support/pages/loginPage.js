

class LoginPage {
  // 
  bukaHalamanWebsite() {
    cy.visit('https://opensource-demo.orangehrmlive.com');
  }

  // Isi nama pengguna
  isiUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  // Isi kata password
  isiPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  // Klik tombol login
  klikTombolLogin() {
    cy.get('button[type="submit"]').click();
  }

  // Verifikasi login berhasil
  verifikasiLoginBerhasil() {
    cy.url().should('include', '/dashboard');
    
  }

  // Verifikasi login gagal
  verifikasiLoginGagal() {
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  }
}

export default new LoginPage();

