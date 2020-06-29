# Dog Ceo API - Cypress QA AUTOMATION ASSESSMENT

The goal of this repository is to create automation test cases for the Dog Ceo API - QA AUTOMATION ASSESSMENT.

The **cypress/integration** folder is where all tests are found and it is structured in the appropriate folder
linked to each test spec.

---

## Running the Test via cypress UI - Test Runner

You’ll start by downloading the repository from Bitbucket on to your local machine.

There are several ways which cypress allows us to execute the specs:

The following command will allow you to invoke test runner through the **cypress UI**:

    - npm run test_ui
    - npx cypress open

Select the browser you would like to execute in the cypress UI.

Select the spec you would like to execute.

## Running our Test in the terminal via command line

The following command will allow you to run all your cypress tests in the terminal:

    - npm run test
    - npx cypress run

And if we only want to run one particular file we can use:

    - npx cypress run  --spec "cypress/integration/examples/file_name.js"

To open all files in chrome:

    - npx cypress run --browser chrome

To run a specific set of tests the naming convention of the script would be `nameOfFolder` + `Test` example: `dogCeoTest`.

## Things to keep in mind when executing commands in the terminal

- The **run** keyword is used to execute scripts in your terminal.
- The **open** keyword is used to open the Cypress UI.

## Something to keep in mind

The repository contains a `cypress.env.json` file which will not be needed in a real production application. The `cypress.env.json` file has been added for testing, but it would be in the `.gitignore` file under normal circumstances.
