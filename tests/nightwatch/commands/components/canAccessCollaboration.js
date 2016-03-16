exports.command = function (user, collaboration) {
  this
    .sectionBreak(".canAccessCollaboration()")

    .waitForElementPresent('#collaborationGrid', 1000)

    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1)")
    .verify.containsText("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody h2", collaboration.collaborationName)
    .click("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) .cardBody").pause(500)

    .verify.elementNotPresent("#collaborationGrid")
    .verify.elementPresent("#upsertCollaborationForm")

    .reviewUpsertCollaboration()

    .verify.elementPresent("#cancelAndGoCollaborationList")
    .verify.visible("#cancelAndGoCollaborationList")
    // .click("#cancelAndGoCollaborationList").pause(500);


    .verify.elementPresent("#navbarTitle")
    .click("#navbarTitle").pause(500)
    .click("#collaborationsTile").pause(500);

  return this;
};
