// import { When, Then } from "cypress-cucumber-preprocessor/steps";

// When("I load the page with a mocked websocket connection", () => {
//     cy
//         .visit("", { onBeforeLoad: window => window.signalrMock = signalrMock })  // Cannot find name 'signalrMock'
//         .hubPublish("notification:receive", "My notification");  // Property 'hubPublish' does not exist on type 'Chainable<AUTWindow>'
// });

// Then("I should be able to use custom commands from my plugin", () => {
//     cy
//         .hubVerify("DeleteNotification", 1, invokes => {  // Property 'hubVerify' does not exist on type 'cy & EventEmitter'
//             expect(invokes[0].args[0]).to.equal(123);
//         });
// });
