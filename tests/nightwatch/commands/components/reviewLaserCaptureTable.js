exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Core")
    .verify.elementPresent("table thead tr .Completion_Date")
    .verify.elementPresent("table thead tr .SlideNumber")
    .verify.elementPresent("table thead tr .Estimated_total_capture_area")
    .verify.elementPresent("table thead tr .Lysates")
    .verify.elementPresent("table thead tr .Lysates_Volume")
    .verify.elementPresent("table thead tr .Downstream_use")

  return this;
};
