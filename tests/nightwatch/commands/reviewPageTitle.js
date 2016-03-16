exports.command = function(formName) {
  this
    .verify.elementPresent("#metadataUpsertPage")
    // .verify.elementPresent("#metadataUpsertPage .recordHeader")
    // .verify.elementPresent("#metadataUpsertPage .recordHeader .recordTitle");
    //
    // .verify.containsText("#metadataUpsertPage .recordHeader ,recordTitle", formName);

    .verify.elementPresent("#contextTitle")
    .verify.containsText("#contextTitle", formName)

    .verify.elementPresent("#breadcrumb")
    .verify.containsText("#breadcrumb", formName);

  return this;
};
