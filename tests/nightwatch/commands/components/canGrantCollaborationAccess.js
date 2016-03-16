exports.command = function (user, collaboration) {
  this
    .sectionBreak(".canGrantCollaborationAccess()")

    .waitForElementPresent('#collaborationGrid', 1000)
    .verify.elementPresent("#collaborationGrid #collaborationGridElements")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1)")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody .review")
    .verify.containsText("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody .review", "Review 1 requests");

  return this;
};
