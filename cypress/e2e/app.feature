Feature: App Testing
        Scenario: User visits the homepage
            Given the user is on the homepage
             When the user opens the app
             Then the user should see the welcome message

        Scenario: User visits the about page
            Given the user is on the about page
             When the user opens the app
             Then the user should see the about message
