exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')

    .verify.elementPresent('input[name="Followup_Center"]')
    .verify.elementPresent('input[name="Last_Known_Survival_Status"]')
    .verify.elementPresent('input[name="Last_Date_Known_Alive"]')
    .verify.elementPresent('input[name="Last_Followup_Date"]')
    .verify.elementPresent('input[name="Expired_Date"]')
    .verify.elementPresent('input[name="Date_of_Progression"]')
    .verify.elementPresent('input[name="Followup_Start_Date"]')
    .verify.elementPresent('input[name="Off_Treatment_Date"]')
    .verify.elementPresent('input[name="Off_Treatment_Reason"]')
    .verify.elementPresent('input[name="Off_Treatment_Reason_Explain"]')
    .verify.elementPresent('input[name="Off_Study_Date"]')
    .verify.elementPresent('input[name="Off_Study_Reason"]')
    .verify.elementPresent('input[name="Off_Study_Reason_Explain"]')
    .verify.elementPresent('input[name="Best_Response"]')
    .verify.elementPresent('input[name="Best_Response_Date"]')
    .verify.elementPresent('input[name="Best_Response_Confirm"]')
    .verify.elementPresent('input[name="QA_Date"]')

    .verify.elementPresent('button[type="submit"]')
  return this;
};
