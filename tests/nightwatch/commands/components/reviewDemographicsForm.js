exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')

    .verify.elementPresent('input[name="Age"]')
    .verify.elementPresent('input[name="Study_Site"]')
    .verify.elementPresent('input[name="Current_Status"]')
    .verify.elementPresent('input[name="Ethnicity"]')
    .verify.elementPresent('input[name="Expired_Date"]')
    .verify.elementPresent('input[name="Last_Visit"]')
    .verify.elementPresent('input[name="Last_Visit_Date"]')
    .verify.elementPresent('input[name="Off_Study_Date"]')
    .verify.elementPresent('input[name="Off_Treatment_Date"]')
    .verify.elementPresent('input[name="On_Followup_Date"]')
    .verify.elementPresent('input[name="On_Study_Date"]')
    .verify.elementPresent('input[name="On_Treatment_Date"]')
    .verify.elementPresent('input[name="Race"]')
    .verify.elementPresent('input[name="Eligibility_Status"]')
    .verify.elementPresent('input[name="Eligibility_Status_Date"]')
    .verify.elementPresent('input[name="Eligibility_Version_Date"]')
    .verify.elementPresent('input[name="Consent_Date"]')
    .verify.elementPresent('input[name="Arms"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
