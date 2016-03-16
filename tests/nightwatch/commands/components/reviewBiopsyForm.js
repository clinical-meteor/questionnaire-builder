exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('input[name="Site"]')
    .verify.elementPresent('input[name="Date_of_Procedure"]')
    .verify.elementPresent('input[name="Date_of_Procedure_Ext"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="List_all_anticancer_meds__including_steroids__taken_within_the_7_days_leading_up_to_biopsy"]')
    //.verify.elementPresent('input[name="If_Patient_took_a_Steroid_in_the_Last_7_Days__was_it_within_24_hours_of_Biopsy?"]')
    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="Phase"]')
    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Arm"]')

    .verify.elementPresent('button[type="submit"]')


  return this;
};
