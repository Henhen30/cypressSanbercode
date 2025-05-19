import forgot_Password from "../../support/pages/forgot_Password";

describe('test lupa kata sandi', () => {
  beforeEach(() => {

    forgot_Password.bukaHalaman();
  });

  it('1. Berhasil mengirim permintaan reset dengan username valid', () => {
    forgot_Password.isiUsername('Admin');
    forgot_Password.klikTombolReset();

    cy.wait(1000); // opsional
    cy.contains('Reset Password link sent successfully').should('exist');
  });

  it('2. Gagal reset karena field username kosong', () => {
    forgot_Password.klikTombolReset();
    forgot_Password.verifikasiErrorUsernameKosong();
  });

  it('3. Username tidak terdaftar namun tetap berhasil', () => {
    forgot_Password.isiUsername('joko');
    forgot_Password.klikTombolReset();
    
  });
});
