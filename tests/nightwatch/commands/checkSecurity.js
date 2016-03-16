exports.command = function (
  allowAnonAccess,
  allowUserAccess,
  allowFellowCollaboratorAccess,
  rootUrl,
  route,
  elementName,
  userSecurityLevel
) {

  this.url(rootUrl + route).pause(500).sectionBreak(route);

  // ug.  this is hacky, horible, no-good code.
  // it barely does the job, but is better than nothing, and allows us to refactor to something better
  // be aware that it's very sequential and brittle
  // it won't scale past three security levels particular well
  // (although you should really think hard about why you'd want more than three security levels anyhow)
  // if you find yourself editing this, you may need to use a bubble sort to figure out where to place new entries
  // yeah, it's that bad

    if (allowAnonAccess && (userSecurityLevel === "anonymous")) {
      this.verify.elementPresent(elementName);
    } else if (allowAnonAccess && ((userSecurityLevel === "signedInUser") || (userSecurityLevel === "collaborator") || (userSecurityLevel === "anonymous"))){
      this.verify.elementPresent(elementName);
    } else if (allowUserAccess && ((userSecurityLevel !== "signedInUser") && (userSecurityLevel !== "collaborator"))){
      this.verify.elementNotPresent(elementName)
        .verify.elementPresent('#pleaseSignInPage');
    } else if (allowUserAccess && ((userSecurityLevel === "signedInUser") || (userSecurityLevel === "collaborator"))) {
      this.verify.elementPresent(elementName);
    } else if (allowFellowCollaboratorAccess && (userSecurityLevel === "anonymous")) {
      this.verify.elementNotPresent(elementName)
        .verify.elementPresent('#pleaseSignInPage');
    } else if (allowFellowCollaboratorAccess && (userSecurityLevel === "collaborator")) {
      this.verify.elementPresent(elementName);
    } else if (allowFellowCollaboratorAccess && (userSecurityLevel !== "signedInUser")) {
      this.verify.elementNotPresent(elementName)
        .verify.elementPresent('#needCollaborationPriviledgesPage');
    }

  // if (allowAnonAccess) {
  //   this.verify.elementPresent(elementName);
  // } else {
  //   if (allowUserAccess && ((userSecurityLevel === "signedInUser") || (userSecurityLevel === "collaborator"))) {
  //     this.verify.elementPresent(elementName);
  //   } else if (allowFellowCollaboratorAccess && (userSecurityLevel === "collaborator")) {
  //     this.verify.elementPresent(elementName);
  //   } else if (allowFellowCollaboratorAccess && (userSecurityLevel !== "collaborator")) {
  //     this.verify.elementNotPresent(elementName)
  //       .verify.elementPresent('#needCollaborationPriviledgesPage');
  //   } else if (allowUserAccess && ((userSecurityLevel !== "signedInUser") && (userSecurityLevel !== "collaborator"))){
  //     this.verify.elementNotPresent(elementName)
  //       .verify.elementPresent('#pleaseSignInPage');
  //   } else if (allowAnonAccess && (userSecurityLevel === "anonymous")) {
  //     this.verify.elementPresent(elementName);
  //   } else {
  //     this.verify.elementNotPresent(elementName)
  //       .verify.elementPresent('#pleaseSignInPage');
  //   }
  // }



  // if (userSecurityLevel === "anonymous") {
  //   if (allowAnonAccess) {
  //     this.verify.elementPresent(elementName);
  //   } else {
  //     this.verify.elementNotPresent(elementName);
  //   }
  // }
  //
  // if (userSecurityLevel === "signedInUser") {
  //   if (allowFellowCollaboratorAccess) {
  //     this.verify.elementNotPresent(elementName)
  //       .verify.elementPresent('#needCollaborationPriviledgesPage');
  //   } else {
  //     if (allowUserAccess) {
  //       this.verify.elementPresent(elementName);
  //     } else {
  //       this.verify.elementNotPresent(elementName)
  //         .verify.elementPresent('#pleaseSignInPage');
  //     }
  //   }
  // }
  //
  // if (userSecurityLevel === "collaborator") {
  //   if (allowFellowCollaboratorAccess) {
  //     this.verify.elementPresent(elementName);
  //   } else {
  //     this.verify.elementNotPresent(elementName)
  //       .verify.elementPresent('#needCollaborationPriviledgesPage');
  //   }
  // }
  //
  // if (userSecurityLevel === "self") {
  //   if (allowSelfAccess) {
  //     this.verify.elementPresent(elementName);
  //   } else {
  //     this.verify.elementNotPresent(elementName);
  //   }
  // }

}
