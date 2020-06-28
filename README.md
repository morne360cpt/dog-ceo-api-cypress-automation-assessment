**Dog Ceo API - Cypress QA AUTOMATION ASSESSMENT**

The goal of this repository is to create automation test cases for the Dog Ceo API - QA AUTOMATION ASSESSMENT.

The **cypress/integration** folder is where all tests are found and it is structured in the appropriate folder
linked to each test spec.
---

## Running the test

You’ll start by downloading the repository from Bitbucket on to your local machine.

There are two ways which cypress allows us to execute the specs:

1. Through the **cypress UI - Test Runner** ---> npm run test_ui

2. Through the **terminal via commmand line** ---> npm run test

## Running the Test via cypress UI - Test Runner

1. The following command will allow you to invoke test runner:
    - npx cypress open

2. Select the browser you would like to execute in the cypress UI

3. Select the spec you would like to execute

## Running our Test via the terminal 

1. The following command will allow you to run all your cypress tests in the terminal:
    - npx cypress run

2. And if we only want to run one particular file we can use:
    - npx cypress run  --spec "cypress/integration/examples/<file_name.js>"

3. To open all files in chrome
    - npx cypress run --browser chrome

## Things to keep in mind when executing commands in the terminal:
- The **run** keyword is used to execute scripts in your terminal
- The **open** keyword is used to open the Cypress UI
