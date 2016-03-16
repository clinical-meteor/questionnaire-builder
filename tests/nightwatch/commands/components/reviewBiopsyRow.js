exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Sample_ID")
    .verify.elementPresent("table tbody tr .Site")
    .verify.elementPresent("table tbody tr .Date_of_Procedure")
    .verify.elementPresent("table tbody tr .Date_of_Procedure_Ext")
    .verify.elementPresent("table tbody tr .Visit_Date")
    .verify.elementPresent("table tbody tr .List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy")
    //.verify.elementPresent("table tbody tr .If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?")
    .verify.elementPresent("table tbody tr .Day")
    .verify.elementPresent("table tbody tr .Phase")
    .verify.elementPresent("table tbody tr .Segment")
    .verify.elementPresent("table tbody tr .Arm")


  return this;
};
