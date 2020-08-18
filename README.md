# Please read for instructions on how to setup and run this cypress-framework

# Pre-requisites

1. Install Node JS and NPM
2. Install and IDE such as Visual Studio Code - optional as can run the tests from the terminal
3. Clone this git repository to your local 
4. Navigate to the root folder of the project and run -> npm install -> this will install any required dependencies
5. If you want can import the project to an IDE

# Options for running the tests from the terminal or IDE

1. Open Cypress and from here can control execution of the tests -> npm run cypress:open
2. Run all tests from the terminal -> npm run cypress:run:all
3. Run specific tests from the terminal - npm run cypress:run:test followed by location/s of test/s 
   For example - npm run cypress:run:test cypress/integration/specs/email_delivery.spec.js
4. To change what browser the tests run against
   Append --browser [browserName] to the above commands
   For example - npm run cypress:run:all --browser edge
   
# For more detailed info on running tests please see - 
https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress
