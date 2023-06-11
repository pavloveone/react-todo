import { inputSelector, btnSelector, task1, task2 } from '../../src/tests-constants/tests-constants';

describe('add task work correctly', function() {
    before(function() {
      cy.visit('http://localhost:3000');
    });

    it('should be add tasks', function() {
      cy.get(inputSelector).first().as('input');
      cy.get(btnSelector).first().as('btn');
      cy.get('.nav-item').contains('Выполненные').as('completed');
      cy.get('.nav-item').contains('Активные').as('active');
      cy.get('.nav-item').contains('Все').as('all');

      cy.get('@input').type(task1)
      cy.get('@input').should('have.value', task1)
      cy.get('@btn').click()
      cy.contains(task1)

      cy.get('@input').type(task2)
      cy.get('@input').should('have.value', task2)
      cy.get('@btn').click()
      cy.contains(task2)

      cy.get('[data-testid=task-1]').last().as('task-1').click()

      cy.get('@completed').click()
      cy.contains(task1)

      cy.get('@active').click()
      cy.contains(task2)

      cy.get('@all').click();
      cy.contains(task1)
      cy.contains(task2)

    });
})