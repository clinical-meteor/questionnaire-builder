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
    .verify.elementPresent("table tbody tr .Action")
    .verify.elementPresent("table tbody tr .Adverse_Event_Description")
    .verify.elementPresent("table tbody tr .Attribution")
    .verify.elementPresent("table tbody tr .Grade")
    .verify.elementPresent("table tbody tr .Onset_Date")
    .verify.elementPresent("table tbody tr .Onset_Date_Ext")
    .verify.elementPresent("table tbody tr .Outcome")
    //.verify.elementPresent("table tbody tr .Resolved_Date_(Log_Column)")
    //.verify.elementPresent("table tbody tr .Resolved_Date_(Log_Column)_Ext")
    .verify.elementPresent("table tbody tr .Serious")
    //.verify.elementPresent("table tbody tr .Unexpected?")
    .verify.elementPresent("table tbody tr .Toxicity_Category")
    .verify.elementPresent("table tbody tr .Toxicity_Code")

  return this;
};
