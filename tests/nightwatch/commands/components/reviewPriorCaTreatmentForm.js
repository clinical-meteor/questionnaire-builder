exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="Phase"]')
    .verify.elementPresent('input[name="Radiation_Therapy"]')
    .verify.elementPresent('input[name="Radical_Prostatectomy"]')
    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Start_Date_Ext"]')
    .verify.elementPresent('input[name="Stop_Date_Ext"]')
    .verify.elementPresent('input[name="Surgery_Date_Ext"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="Start_Date"]')
    .verify.elementPresent('input[name="Stop_Date"]')
    .verify.elementPresent('input[name="Surgery_Date"]')
    .verify.elementPresent('input[name="Arm"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
