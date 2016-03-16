exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Timepoint")
    .verify.elementPresent("table thead tr .Procedure_Date")
    //.verify.elementPresent("table thead tr .Biopsy_Site")
    .verify.elementPresent("table thead tr .Attending_Radiologist")
    .verify.elementPresent("table thead tr .CRC_at_Collection")
    .verify.elementPresent("table thead tr .Number_of_Cores")
    .verify.elementPresent("table thead tr .Cores")
    .verify.elementPresent("table thead tr .Fixed_Core_Ship_Date")
    .verify.elementPresent("table thead tr .Freezer")
    .verify.elementPresent("table thead tr .Box_ID")
    .verify.elementPresent("table thead tr .Core_Notes")
    .verify.elementPresent("table thead tr .TimepointNotes")

  return this;
};
