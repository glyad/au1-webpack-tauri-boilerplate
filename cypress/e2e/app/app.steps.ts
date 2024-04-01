import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('the user should see the message {string}', (msg: string) => {
  cy.contains(msg).should('not.be.undefined');
});
