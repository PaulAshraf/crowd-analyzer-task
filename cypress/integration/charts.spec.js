/// <reference types="cypress" />

describe('Happy Scenario', () => {
	beforeEach(() => {
		cy.intercept('GET', 'http://localhost:3001/charts', {
			fixture: 'charts.json',
		}).as('getCharts')
		cy.intercept('POST', 'http://localhost:3001/charts', {
			fixture: 'newChart.json',
		}).as('createChart')
	})

	it('Populates the container with 3 charts', () => {
		cy.visit('/')
		cy.get('[data-cy=container]')
			.find('[data-cy=chart]')
			.should('have.length', 3)
	})

	it('Should Display the add form when clicking the add button', () => {
		cy.visit('/')
		cy.get('[data-cy=add-button]').click()
		cy.get('[data-cy=add-form]').should('be.visible')
	})

	it('Should Remove the add form when clicking the internal add button', () => {
		cy.visit('/')
		cy.get('[data-cy=add-button]').click()
		cy.get('[data-cy=internal-add-button]').click()
		cy.get('[data-cy=add-form]').should('not.exist')
	})

	it('Should add the new chart when clicking the add button', () => {
		cy.visit('/')
		cy.get('[data-cy=add-button]').click()
		cy.get('[data-cy=internal-add-button]').click()
		cy.wait('@createChart')
		cy.get('[data-cy=container]')
			.find('[data-cy=chart]')
			.should('have.length', 4)
	})
	it('Should display the success toast if the add is successfull', () => {
		cy.visit('/')
		cy.get('[data-cy=add-button]').click()
		cy.get('[data-cy=internal-add-button]').click()
		cy.get('[data-cy=toast-success]').should('be.visible')
	})
})

describe('Error Scenario', () => {
	beforeEach(() => {
		cy.intercept('GET', 'http://localhost:3001/charts', {
			fixture: 'charts.json',
		}).as('getCharts')
		cy.intercept('POST', 'http://localhost:3001/charts', {
			forceNetworkError: true,
		}).as('createChart')
	})

	it('Should not add the new chart when clicking the add button', () => {
		cy.visit('/')
		cy.get('[data-cy=add-button]').click()
		cy.get('[data-cy=internal-add-button]').click()
		cy.wait('@createChart')
		cy.get('[data-cy=container]')
			.find('[data-cy=chart]')
			.should('have.length', 3)
	})
	it('Should display the error toast if the add is successfull', () => {
		cy.visit('/')
		cy.get('[data-cy=add-button]').click()
		cy.get('[data-cy=internal-add-button]').click()
		cy.get('[data-cy=toast-error]').should('be.visible')
	})
})
