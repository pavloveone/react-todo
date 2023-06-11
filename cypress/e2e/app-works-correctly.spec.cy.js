import { inputSelector } from '../../src/tests-constants/tests-constants';
describe('app works correctly', function() {
    before(function() {
      cy.visit('http://localhost:3000');
    });

    it('should be the title and input of the page', function() {
      cy.contains('todos');
      cy.get(inputSelector).first().as('input');
      cy.get('@input').should('be.visible');
    });
})