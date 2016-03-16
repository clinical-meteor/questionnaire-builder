exports.command = function (user, collaboration) {
  this
    .sectionBreak(".canSeeCollaborationInList()")

    .waitForElementPresent('#collaborationGrid', 1000)
    .verify.elementPresent("#collaborationGrid #collaborationGridElements")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1)")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody h2")
    .verify.containsText("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody h2", collaboration.collaborationName);

  return this;
};
