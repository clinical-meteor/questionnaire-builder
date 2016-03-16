exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Followup_Center")
    .verify.elementPresent("table thead tr .Last_Known_Survival_Status")
    .verify.elementPresent("table thead tr .Last_Date_Known_Alive")
    .verify.elementPresent("table thead tr .Last_Followup_Date")
    .verify.elementPresent("table thead tr .Expired_Date")
    .verify.elementPresent("table thead tr .Date_of_Progression")
    .verify.elementPresent("table thead tr .Followup_Start_Date")
    .verify.elementPresent("table thead tr .Off_Treatment_Date")
    .verify.elementPresent("table thead tr .Off_Treatment_Reason")
    .verify.elementPresent("table thead tr .Off_Treatment_Reason_Explain")
    .verify.elementPresent("table thead tr .Off_Study_Date")
    .verify.elementPresent("table thead tr .Off_Study_Reason")
    .verify.elementPresent("table thead tr .Off_Study_Reason_Explain")
    .verify.elementPresent("table thead tr .Best_Response")
    .verify.elementPresent("table thead tr .Best_Response_Date")
    .verify.elementPresent("table thead tr .Best_Response_Confirm")
    .verify.elementPresent("table thead tr .QA_Date")

  return this;
};
