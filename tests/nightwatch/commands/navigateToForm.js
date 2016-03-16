exports.command = function(searchTerm) {
  this
    .verify.elementPresent("#navbarTitle")
    .click("#navbarTitle").pause(500)

    .verify.elementPresent("#navbarTitle")
    .click("#navbarTitle").pause(500)

    .verify.elementPresent("#metadataTile")
    .click("#metadataTile").pause(500)

    .verify.elementPresent("#metadataSearchInput")
    .clearValue('#metadataSearchInput').pause(200)

    // we want to be extra sure the input is cleared
    .clearValue('#metadataSearchInput').pause(200)

    .setValueSlowly('#metadataSearchInput', searchTerm)

    .click("#metadatasList .metadataItem:nth-child(1) .newLink").pause(500);

  return this;
};
