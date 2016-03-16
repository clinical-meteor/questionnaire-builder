exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Day")
    .verify.elementPresent("table thead tr .Phase")
    .verify.elementPresent("table thead tr .Radiation_Therapy")
    .verify.elementPresent("table thead tr .Radical_Prostatectomy")
    .verify.elementPresent("table thead tr .Segment")
    .verify.elementPresent("table thead tr .Start_Date_Ext")
    .verify.elementPresent("table thead tr .Stop_Date_Ext")
    .verify.elementPresent("table thead tr .Surgery_Date_Ext")
    .verify.elementPresent("table thead tr .Visit_Date")
    .verify.elementPresent("table thead tr .Start_Date")
    .verify.elementPresent("table thead tr .Stop_Date")
    .verify.elementPresent("table thead tr .Surgery_Date")
    .verify.elementPresent("table thead tr .Arm")

  return this;
};
