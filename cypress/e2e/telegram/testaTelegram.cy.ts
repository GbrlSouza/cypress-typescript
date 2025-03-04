describe("Enviando uma mensagem no Telegram Web", () => {
  it("Deve encontrar um contato e enviar uma mensagem", () => {
    cy.visit("https://web.telegram.org/");

    // Verifica se o usuário está logado
    cy.get("div.im_dialogs_wrap", { timeout: 15000 }).should("be.visible");

    // Clica no campo de busca e digita o nome do contato
    cy.get("input.im_dialogs_search").click().type("Nome do Contato");

    // Seleciona o contato na lista de resultados
    cy.contains("div.im_dialog_peer", "Nome do Contato").click();

    // Digita e envia a mensagem
    cy.get("div.composer_rich_textarea").type("Olá, esta é uma mensagem automatizada!{enter}");

    // Confirma que a mensagem foi enviada
    cy.get("div.im_message_out").should("have.length.greaterThan", 0);
  });
});