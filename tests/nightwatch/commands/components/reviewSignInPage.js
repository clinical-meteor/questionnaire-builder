exports.command = function(username, password) {
  this
    .waitForElementVisible('#entrySignIn', 1000)

      .verify.elementPresent("#emailInput")
      .verify.elementPresent("#passwordInput")

  return this;
};
