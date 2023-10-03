const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect } = require('@wdio/globals')
const loginPage = require('../pageobjects/login.page')

Given(/^I am on the login page$/, async () => {
    await loginPage.open()
});

When(/^I click login with empty username and empty password$/, async () => {
    await loginPage.clicklogin()
});

Then(/^I should see and verify the error (.*) for empty fields$/, async (message) => {
    await expect(loginPage.errorMassage).toBeExisting()
    await expect(loginPage.errorMassage).toHaveTextContaining(message)
});

