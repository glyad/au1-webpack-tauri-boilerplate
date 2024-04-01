import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { has } from 'cypress/types/lodash';

Given('the user is on the homepage', () => {
  cy.visit('http://localhost:8080');
});

When('the user opens the app', () => {
  // TODO: implement step
});

Then('the user should see the message {string}', (msg: string) => {
  cy.contains(msg).should('not.be.undefined'); //.get('h1').contains(msg);
});

Given('the user is on the about page', () => {
  cy.visit('http://localhost:8080');
});


