describe("Enviando uma mensagem no WhatsApp Web", () => {
  it("Deve encontrar um contato e enviar uma mensagem", () => {
    cy.visit("https://web.whatsapp.com");

    // Espera o login manual
    cy.get("canvas[aria-label='Scan me!']", { timeout: 60000 }).should("not.exist");

    // Busca o campo de pesquisa de contatos e digita o nome do contato
    cy.get("div[title='Search input textbox']").click().type("Nome do Contato");

    // Seleciona o contato encontrado
    cy.contains("span[dir='auto']", "Nome do Contato").click();

    // Digita e envia a mensagem
    cy.get("div[title='Type a message']").type("Olá, este é um teste do Cypress!{enter}");

    // Confirma que a mensagem foi enviada (mensagem com ícone de check azul ou cinza)
    cy.get("span[data-icon='msg-check']").should("be.visible");
  });
});
