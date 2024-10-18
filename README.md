#  SauceDemo frontend test automation using Cypress

This project contains automated end-to-end tests using [Cypress](https://www.cypress.io/) to test [Sauce Demo](https://www.saucedemo.com/) . The tests are written to validate various elements and functionalities of the web application.


## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instructions

### Setup the project locally
- Clone the repository to your local machine
- Navigate to your project directory
- Install all necessary dependencies by runnning `npm install`

### Run tests 
- Headed mode(UI mode): When running tests in headed mode we use cypress test runner and this allows you to see the test execution on the selected browser. Run followung command to run tests in headed mode.
`npx cypress open`

- Headless mode: Runs in the background
Use following command to run all the tests in headless mode.
`npx cypress run`

- You can also specify a browser for testing as well.
`npx cypress run --browser chrome`

- If you want to run one spec file you can use the following command
`npx cypress run --spec "cypress/e2e/test-file.cy.js"`






