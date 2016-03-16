exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('input[name="Arm"]')
    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="Phase"]')
    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="Action"]')
    .verify.elementPresent('input[name="Adverse_Event_Description"]')
    .verify.elementPresent('input[name="Attribution"]')
    .verify.elementPresent('input[name="Grade"]')
    .verify.elementPresent('input[name="Onset_Date"]')
    .verify.elementPresent('input[name="Onset_Date_Ext"]')
    .verify.elementPresent('input[name="Outcome"]')
    .verify.elementPresent('input[name="Serious"]')
    //.verify.elementPresent('input[name="Unexpected?"]')
    .verify.elementPresent('input[name="Toxicity_Category"]')
    .verify.elementPresent('input[name="Toxicity_Code"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
