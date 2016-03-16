exports.command = function (user, collaboration) {
  this
    .sectionBreak(".canNotAccessCollaboration()")

    .waitForElementPresent('#collaborationGrid', 1000)
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaborationCard:nth-child(1)")
    .verify.containsText("#collaborationGrid #collaborationGridElements .collaborationCard:nth-child(1) h2", collaboration.collaborationName)
    .click("#collaborationGrid #collaborationGridElements .collaborationCard:nth-child(1) .cardBody").pause(1000)

    .verify.elementNotPresent("#upsertCollaborationForm")
      .click("#navbarTitle").pause(500)
      .click("#collaborationsTile").pause(500)

    .verify.elementPresent("#collaborationGrid");

  return this;
};
