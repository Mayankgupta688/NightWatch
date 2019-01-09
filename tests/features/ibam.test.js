module.exports = {
  'User can Login and Access Tab..': function(browser) {
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
      .click("#financialInstitutionsMainMenu")
      .click("#tile-PENDING_REACTIVATE")
      .click("#internalEntitiesMainMenu")
      .click("#businessUnitsMainMenu")
      .click("#authorityGroupsMainMenu")
      .click("#peopleMainMenu")
      .click("#bfa")
      .end()
    }
}