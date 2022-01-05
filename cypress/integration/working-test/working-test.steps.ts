import { When, Then } from "cypress-cucumber-preprocessor/steps";

When("I go to google.com", () => {
    cy.visit("");
});

Then("the page loads successfully", () => {
    cy.get("input[value='Google Search']").should("exist");
});
