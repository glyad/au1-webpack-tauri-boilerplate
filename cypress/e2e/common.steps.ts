import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('the user is on the homepage', () => {
  cy.visit('http://localhost:8080');
});

When('the user opens the app', () => {
  // TODO: implement step
});
