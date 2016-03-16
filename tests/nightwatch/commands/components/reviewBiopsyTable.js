exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Site")
    .verify.elementPresent("table thead tr .Date_of_Procedure")
    .verify.elementPresent("table thead tr .Date_of_Procedure_Ext")
    .verify.elementPresent("table thead tr .Visit_Date")
    .verify.elementPresent("table thead tr .List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy")
    //.verify.elementPresent("table thead tr .If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?")
    .verify.elementPresent("table thead tr .Day")
    .verify.elementPresent("table thead tr .Phase")
    .verify.elementPresent("table thead tr .Segment")
    .verify.elementPresent("table thead tr .Arm")


  return this;
};
