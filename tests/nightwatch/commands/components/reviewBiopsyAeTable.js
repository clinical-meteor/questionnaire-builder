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
    .verify.elementPresent("table thead tr .Action")
    .verify.elementPresent("table thead tr .Adverse_Event_Description")
    .verify.elementPresent("table thead tr .Attribution")
    .verify.elementPresent("table thead tr .Grade")
    .verify.elementPresent("table thead tr .Onset_Date")
    .verify.elementPresent("table thead tr .Onset_Date_Ext")
    .verify.elementPresent("table thead tr .Outcome")
    //.verify.elementPresent("table thead tr .Resolved_Date_(Log_Column)")
    //.verify.elementPresent("table thead tr .Resolved_Date_(Log_Column)_Ext")
    .verify.elementPresent("table thead tr .Serious")
    //.verify.elementPresent("table thead tr .Unexpected?")
    .verify.elementPresent("table thead tr .Toxicity_Category")
    .verify.elementPresent("table thead tr .Toxicity_Code")

  return this;
};
