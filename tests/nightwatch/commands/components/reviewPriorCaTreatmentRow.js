exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Sample_ID")
    .verify.elementPresent("table tbody tr .Day")
    .verify.elementPresent("table tbody tr .Phase")
    .verify.elementPresent("table tbody tr .Radiation_Therapy")
    .verify.elementPresent("table tbody tr .Radical_Prostatectomy")
    .verify.elementPresent("table tbody tr .Segment")
    .verify.elementPresent("table tbody tr .Start_Date_Ext")
    .verify.elementPresent("table tbody tr .Stop_Date_Ext")
    .verify.elementPresent("table tbody tr .Surgery_Date_Ext")
    .verify.elementPresent("table tbody tr .Visit_Date")
    .verify.elementPresent("table tbody tr .Start_Date")
    .verify.elementPresent("table tbody tr .Stop_Date")
    .verify.elementPresent("table tbody tr .Surgery_Date")
    .verify.elementPresent("table tbody tr .Arm")

  return this;
};
