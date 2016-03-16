exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Timepoint")
    .verify.elementPresent("table thead tr .Draw_Date")
    .verify.elementPresent("table thead tr .CRC_at_Collection")

  return this;
};
