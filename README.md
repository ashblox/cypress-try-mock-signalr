# CypressTryMockSignalR

This project was created to demonstrate an issue encountered with a Cypress plugin. It seems that the Typescript definitions and custom commands are not being recognized.

## How to Reproduce

Navigate to `cypress/integration/plugin-typings/plugin-typings.steps.ts`. You will notice that the custom commands are not recognized nor is the global variable for `signalrMock`.

## But does this project configuration even work?

If you comment out the `cypress/integration/plugin-typings.feature` file and its corresponding step definition file, the Working Test will run and pass. Just type `npm run e2e` in your command line.
