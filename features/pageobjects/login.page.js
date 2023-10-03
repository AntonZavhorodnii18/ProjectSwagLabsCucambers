const { $ } = require('@wdio/globals')

class LoginPage {
/*
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }
*/
    get loginButton () {
        return $('#login-button')
    }

    get errorMassage () {
        return $('#login_button_container > div > form > div.error-message-container.error')
    }

    async clicklogin (){
        await this.loginButton.click()
    }
/*
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }
*/
    open() {
        return browser.url(`https://www.saucedemo.com/`)
    }
}

module.exports = new LoginPage()
