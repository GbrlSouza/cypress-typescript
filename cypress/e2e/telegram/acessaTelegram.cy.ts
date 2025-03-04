describe("Testando o Telegram Web", () => {
  it("Deve abrir o Telegram Web e verificar se o usuário está logado", () => {
    cy.visit("https://web.telegram.org/");

    // Espera pelo campo de login (caso não esteja logado)
    cy.get("input[name='phone_number']", { timeout: 10000 }).then(($input) => {
      if ($input.length) {
        cy.log("Usuário não está logado, precisa fazer login manualmente.");
      } else {
        cy.log("Usuário já está logado.");
      }
    });

    // Se já estiver logado, verifica se a lista de chats carregou
    cy.get("div.im_dialogs_wrap").should("be.visible");
  });
});