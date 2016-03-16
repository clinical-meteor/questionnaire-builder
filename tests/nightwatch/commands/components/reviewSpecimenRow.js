exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Sample_ID")
    .verify.elementPresent("table tbody tr .Arm")
    .verify.elementPresent("table tbody tr .Day")
    .verify.elementPresent("table tbody tr .Phase")
    .verify.elementPresent("table tbody tr .Segment")
    .verify.elementPresent("table tbody tr .Visit_Date")
    //.verify.elementPresent("table tbody tr .Were_study_blood_samples_collected_at_this_visit?")
    .verify.elementPresent("table tbody tr .Notes")

  return this;
};
