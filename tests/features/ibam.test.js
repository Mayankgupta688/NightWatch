module.exports = {
    'User can Login': function(browser) {
      browser
        .url('https://192.168.55.101/scc/login.jsp') 
        .waitForElementVisible('body', 1000)
        .verify.title('ION Bank Account Management')
        .assert.containsText(".loginHeader", 'Login')
        .setValue("input[name=j_username]", "bluedog.jatinder.virdee@wallstreetsystems.com")
        .setValue("input[name=j_password]", "123456")
        .click('input[type=submit]')
        .waitForElementVisible('#dashboardMainMenu', 1000)
        .click('#accountsMainMenu')
        .assert.hidden("[name=_csrf]")
        .end()
      }
  }