// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('ダイアログが表示されること', () => {
    cy.visit('/')
    cy.contains('div', 'VeeValidate')
    cy.contains('button', 'Vuetifyダイアログ').click()
    cy.contains('div.v-dialog', 'Select Country').should('be.visible')
  })

  it('ダイアログの Belgium 項目を選択できること', () => {
    cy.visit('/')
    cy.contains('div', 'VeeValidate')
    cy.contains('button', '＋VeeValidateダイアログ(対策済)').click()
    cy.contains('div.v-dialog', 'Select Country').should('be.visible')
    cy.contains('button', 'Save').should('be.disabled')
    cy.contains('div', 'Belgium').click()
    cy.contains('button', 'Save').should('be.enabled')
    cy.contains('button', 'Save').click()
  })

  it('AWSアカウントIDのフォーマット違反でメッセージが表示されること', () => {
    cy.visit('/')
    cy.get('div#form-vee-validate').within(() => {
      cy.contains('label', 'AWSアカウントID').next('input').type('hoge')
      cy.get('.v-messages__message').should('not.be.empty')
    })
  })
})
