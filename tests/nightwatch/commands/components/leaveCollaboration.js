exports.command = function (user, collaboration) {
  this
    .sectionBreak(".leaveCollaboration()")
    .waitForElementPresent('#collaborationGrid', 1000)

    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='leave']")
    .click("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='leave']").pause(1000)

    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='join']");

  return this;
};
