describe("Testing wcqaAutomation", () => {
    before(() => {
      cy.visit("/");
    });
    it("Clicar nos botões One,Two e Four e validar a não-presença dos mesmos", () => {
      
        cy.get('#btn_one').should('be.visible').click();
        cy.get('#btn_two').should('be.visible').click();
        cy.get('#btn_three').should('be.visible').click();
       
        cy.get('#btn_one').should('not.be.visible');
        cy.get('#btn_two').should('not.be.visible');
        cy.get('#btn_three').should('not.be.visible');
    })
    it("validações na tela do wcQA ", () => {
        //gerador de palavras randomicas 
        const randomWord = cy.faker.lorem.words();
        //captura o elemento yourFirst name e verifica se está visivel para o usuárioe logo após adiciona o nome;
        cy.get('#first_name').should("be.visible").type(randomWord);

        //clica no botão one e verifica se está marcado.
        cy.get('#opt_one').check().should('be.checked');

       //valida se a opção optionThree está visivel
        cy.get('#opt_three').should('be.visible')
      //seleciona a oção ExampleTwo dentro do select box 
        cy.get('select').select('option_two').should('contain','ExampleTwo');
     
        //valida a presença da imagem "selenium webdrive"
        cy.get('[alt="selenium"]').should('be.visible');
    })
  });