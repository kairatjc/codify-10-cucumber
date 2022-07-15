const { Given, When, Then } = require("@wdio/cucumber-framework");

const AddRemovePage = require('../pageobjects/AddRemovePage');

Given("I opened addremove page", async () => {
  await AddRemovePage.open();
});

When("I click on add element button", async () => {
  await AddRemovePage.clickAddButton();
});

Then("Delete button appeared", async () => {
  await AddRemovePage.checkButtonAppeared();
});

When("I click on Delete button", async () => {
  console.log("I click on Delete button");
});

Then("Delete button disappeared", async () => {
    console.log("Delete button disappeared");
})
