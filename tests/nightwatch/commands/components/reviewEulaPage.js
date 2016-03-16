exports.command = function() {
  this
    .waitForElementVisible('#termsOfUsePage', 1000)

  return this;
};
