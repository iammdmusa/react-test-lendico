describe('Index Page', function () {
  beforeEach(() => {
    cy.log('Visiting http://localhost:3000')
    cy.visit('/')
  })

  it('renders deploy link', function () {
    cy.contains(
      'Instantly deploy your Next.js site to a public URL with ZEIT Now.'
    )
  })
})
