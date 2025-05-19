

class forgot_Password {
  // Buka halaman lupa kata sandi
  bukaHalaman() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('p.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click();
  }

  // masukan username
  isiUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  // Klik tombol Reset Password
  klikTombolReset() {
    cy.get('button[type="submit"]').click();
  }

  // Verifikasi bahwa pesan konfirmasi muncul
  verifikasiPesanSukses() {
    cy.get('.oxd-text--h6.orangehrm-forgot-password-title')
      .should('contain', 'Reset Password link sent successfully');
  }

  // Verifikasi validasi jika username kosong
  verifikasiErrorUsernameKosong() {
    cy.get('.oxd-input-field-error-message').should('contain', 'Required');
  }
}

export default new forgot_Password();
