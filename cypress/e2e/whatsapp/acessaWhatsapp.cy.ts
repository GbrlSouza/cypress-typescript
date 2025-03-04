describe("Testando o WhatsApp Web", () => {
  it("Deve abrir o WhatsApp Web e verificar se o usuário está logado", () => {
    cy.visit("https://web.whatsapp.com");

    // Aguarda o usuário fazer login manualmente (escaneando o QR Code)
    cy.get("canvas[aria-label='Scan me!']", { timeout: 60000 }).should("not.exist");

    // Verifica se a lista de conversas carregou
    cy.get("div[role='list']").should("be.visible");
  });
});
