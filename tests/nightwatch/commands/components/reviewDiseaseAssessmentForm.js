exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    //.verify.elementPresent('input[name="Are_Lesions_Present?"]')
    .verify.elementPresent('input[name="Date_of_Procedure"]')
    .verify.elementPresent('input[name="Date_of_Procedure_Ext"]')
    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="Phase"]')
    .verify.elementPresent('input[name="Procedure"]')
    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="Compared_with_previous_scan"]')
    .verify.elementPresent('input[name="Comments"]')
    .verify.elementPresent('input[name="Arm"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
