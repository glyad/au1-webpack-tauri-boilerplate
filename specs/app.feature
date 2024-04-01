Feature: App Testing
              As a user of the app I want to test the app to make sure it works as expected.

        Background: User is on the homepage
            Given the user is on the homepage
             When the user opens the app


        Scenario: User visits the homepage
             Then the user should see the message "Welcome to Tauri with old good Aurelia v.1!"

        Scenario: User visits the homepage with blackjack and hookers
             Then the user should see the message "Powered by Webpack, Typescript, and Rust."
