exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Sample_ID")
    //.verify.elementPresent("table thead tr .Are_Lesions_Present?")
    .verify.elementPresent("table thead tr .Date_of_Procedure")
    .verify.elementPresent("table thead tr .Date_of_Procedure_Ext")
    .verify.elementPresent("table thead tr .Day")
    .verify.elementPresent("table thead tr .Phase")
    .verify.elementPresent("table thead tr .Procedure")
    .verify.elementPresent("table thead tr .Segment")
    .verify.elementPresent("table thead tr .Visit_Date")
    .verify.elementPresent("table thead tr .Compared_with_previous_scan")
    .verify.elementPresent("table thead tr .Comments")
    .verify.elementPresent("table thead tr .Arm")

  return this;
};
