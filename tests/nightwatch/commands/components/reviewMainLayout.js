exports.command = function(username, password) {
  this
      .verify.elementPresent("body").pause(1000)

      .verify.elementPresent("#navbarHeader")

      .verify.elementPresent("#mainPanel")
      .verify.elementPresent("#secondPanel")

      .verify.elementPresent("#navbarFooter")

  return this;
};
