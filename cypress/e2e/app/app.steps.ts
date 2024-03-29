import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on the homepage', () => {
  cy.visit('http://localhost:8080');
});

When('the user opens the app', () => {
  // TODO: implement step
});

Then('the user should see the welcome message', () => {
  cy.get('h1').contains('Hello');
});

Given('the user is on the about page', () => {
  cy.visit('http://localhost:8080');
});

Then('the user should see the about message', () => {
  cy.get('h2').contains('From');
});
