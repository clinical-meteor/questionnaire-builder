exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Day")
    .verify.elementPresent("table thead tr .ECOG_PS")
    .verify.elementPresent("table thead tr .Phase")
    .verify.elementPresent("table thead tr .Segment")
    .verify.elementPresent("table thead tr .Visit_Date")
    .verify.elementPresent("table thead tr .Weight")
    .verify.elementPresent("table thead tr .Arm")

  return this;
};
