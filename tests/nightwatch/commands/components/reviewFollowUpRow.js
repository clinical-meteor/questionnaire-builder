exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Followup_Center")
    .verify.elementPresent("table tbody tr .Last_Known_Survival_Status")
    .verify.elementPresent("table tbody tr .Last_Date_Known_Alive")
    .verify.elementPresent("table tbody tr .Last_Followup_Date")
    .verify.elementPresent("table tbody tr .Expired_Date")
    .verify.elementPresent("table tbody tr .Date_of_Progression")
    .verify.elementPresent("table tbody tr .Followup_Start_Date")
    .verify.elementPresent("table tbody tr .Off_Treatment_Date")
    .verify.elementPresent("table tbody tr .Off_Treatment_Reason")
    .verify.elementPresent("table tbody tr .Off_Treatment_Reason_Explain")
    .verify.elementPresent("table tbody tr .Off_Study_Date")
    .verify.elementPresent("table tbody tr .Off_Study_Reason")
    .verify.elementPresent("table tbody tr .Off_Study_Reason_Explain")
    .verify.elementPresent("table tbody tr .Best_Response")
    .verify.elementPresent("table tbody tr .Best_Response_Date")
    .verify.elementPresent("table tbody tr .Best_Response_Confirm")
    .verify.elementPresent("table tbody tr .QA_Date")

  return this;
};
