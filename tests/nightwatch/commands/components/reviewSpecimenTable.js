exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Arm")
    .verify.elementPresent("table thead tr .Day")
    .verify.elementPresent("table thead tr .Phase")
    .verify.elementPresent("table thead tr .Segment")
    .verify.elementPresent("table thead tr .Visit_Date")
    //.verify.elementPresent("table thead tr .Were_study_blood_samples_collected_at_this_visit?")
    .verify.elementPresent("table thead tr .Notes")

  return this;
};
