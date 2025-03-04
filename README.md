# 🚀 Configuração do Cypress com TypeScript  

Este guia explica como instalar e configurar o **Cypress** para escrever testes automatizados usando **TypeScript**.  

---

## 📌 **1. Pré-requisitos**  
Antes de começar, certifique-se de ter:  
✔️ **Node.js** instalado (versão 14 ou superior recomendada)  
✔️ **npm** ou **yarn** para gerenciar pacotes  

Para verificar se o Node.js está instalado, execute:  
```sh
node -v
```
Para verificar o npm:  
```sh
npm -v
```

---

## 📌 **2. Instalando o Cypress**  
No terminal, dentro da pasta do seu projeto, execute:  

```sh
npm install cypress --save-dev
```
Ou, se estiver usando **Yarn**:  
```sh
yarn add cypress --dev
```

Agora, abra o Cypress pela primeira vez para que ele crie a estrutura de arquivos:  

```sh
npx cypress open
```

Isso criará a pasta `cypress/` no seu projeto.

---

## 📌 **3. Instalando o TypeScript**  
Se seu projeto ainda não usa **TypeScript**, instale os pacotes necessários:  

```sh
npm install typescript @tsconfig/node18 @types/node --save-dev
```

Agora, crie um arquivo `tsconfig.json` na raiz do projeto com o seguinte conteúdo:  

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["ES6", "DOM"],
    "types": ["cypress"],
    "strict": true
  }
}
```

Isso configura o TypeScript para reconhecer os tipos do Cypress corretamente.

---

## 📌 **4. Configurando Cypress para TypeScript**  
Agora, renomeie os arquivos de teste na pasta `cypress/e2e/` de `.js` para `.ts`.  

Por exemplo:  
🔹 `cypress/e2e/example.cy.js` → `cypress/e2e/example.cy.ts`  

Agora, crie um novo arquivo de teste TypeScript:  

📄 **cypress/e2e/test.cy.ts**  
```ts
describe("Teste com Cypress e TypeScript", () => {
  it("Deve visitar a página inicial", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });
});
```

---

## 📌 **5. Executando os testes**  
Agora, para rodar os testes, execute:  

```sh
npx cypress run
```
Ou, se quiser abrir a interface visual do Cypress:  

```sh
npx cypress open
```

Escolha um teste e rode 🚀

---

## 📌 **6. Dicas Extras**  

✅ **Habilitar ESLint e Prettier para manter o código organizado:**  
```sh
npm install eslint eslint-plugin-cypress prettier --save-dev
```

✅ **Criar aliases para imports no `tsconfig.json`**  
```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@support/*": ["cypress/support/*"],
      "@e2e/*": ["cypress/e2e/*"]
    }
  }
}
```

Agora, você pode importar arquivos assim:  
```ts
import "@support/commands";
```

---

## 🎯 **Conclusão**  
Agora o Cypress está configurado para usar **TypeScript** no seu projeto! 🚀  
Se precisar de mais ajuda, consulte a [documentação oficial do Cypress](https://docs.cypress.io/guides/overview/why-cypress).  

Happy Testing! 🎉😊  
