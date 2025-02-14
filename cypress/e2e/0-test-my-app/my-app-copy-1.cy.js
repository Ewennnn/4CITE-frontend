describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })

  it('should alert when click on click me button', () => {
    cy.get("#root").click('button').contains('Click me !')
  })
})

