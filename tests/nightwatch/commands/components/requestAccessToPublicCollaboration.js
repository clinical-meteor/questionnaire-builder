exports.command = function (user, collaboration) {
  this
    .sectionBreak(".requestAccessToPublicCollaboration()")
    // .verify.elementPresent("#collaborationGrid")
    // .verify.elementPresent("#collaborationGrid  #collaborationGridElements")
    // .verify.elementPresent("#collaborationGrid  #collaborationGridElements .collaboration:nth-child(1)")
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='join']")
    .click("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='join']").pause(1000)

    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='leave']");

  return this;
};
