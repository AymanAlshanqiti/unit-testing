describe('renders the home page', () => {
	it('should renders correctly', () => {
		cy.visit('/');
		cy.get('.App').should('exist');
	});

	it('should get courses correctly', () => {
		cy.visit('/courses');
		cy.findAllByText('JavaScript').should('exist');
	});

	it('should get course detail correctly', () => {
		cy.visit('/courses');
		cy.findAllByText('Swift').click();
		cy.url().should('include', 'courses/2');
		cy.findAllByText('Hello this is Swift course').should('exist');
	});
});
