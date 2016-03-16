exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Sample_ID")
    //.verify.elementPresent("table tbody tr .Are_Lesions_Present?")
    .verify.elementPresent("table tbody tr .Date_of_Procedure")
    .verify.elementPresent("table tbody tr .Date_of_Procedure_Ext")
    .verify.elementPresent("table tbody tr .Day")
    .verify.elementPresent("table tbody tr .Phase")
    .verify.elementPresent("table tbody tr .Procedure")
    .verify.elementPresent("table tbody tr .Segment")
    .verify.elementPresent("table tbody tr .Visit_Date")
    .verify.elementPresent("table tbody tr .Compared_with_previous_scan")
    .verify.elementPresent("table tbody tr .Comments")
    .verify.elementPresent("table tbody tr .Arm")

  return this;
};
