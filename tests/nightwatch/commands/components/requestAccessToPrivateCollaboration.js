exports.command = function (user, collaboration) {
  this
    .sectionBreak(".requestAccessToPrivateCollaboration()")

    // TODO: rename 'apply' to 'request'
    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='apply']")
    .click("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='apply']").pause(1000)

    .verify.elementPresent("#collaborationGrid #collaborationGridElements .collaboration:nth-child(1) button[name='waiting']");

  return this;
};
