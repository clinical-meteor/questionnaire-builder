exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Age")
    .verify.elementPresent("table tbody tr .Study_Site")
    .verify.elementPresent("table tbody tr .Current_Status")
    .verify.elementPresent("table tbody tr .Ethnicity")
    .verify.elementPresent("table tbody tr .Expired_Date")
    .verify.elementPresent("table tbody tr .Last_Visit")
    .verify.elementPresent("table tbody tr .Last_Visit_Date")
    .verify.elementPresent("table tbody tr .Off_Study_Date")
    .verify.elementPresent("table tbody tr .Off_Treatment_Date")
    .verify.elementPresent("table tbody tr .On_Followup_Date")
    .verify.elementPresent("table tbody tr .On_Study_Date")
    .verify.elementPresent("table tbody tr .On_Treatment_Date")
    .verify.elementPresent("table tbody tr .Race")
    .verify.elementPresent("table tbody tr .Eligibility_Status")
    .verify.elementPresent("table tbody tr .Eligibility_Status_Date")
    .verify.elementPresent("table tbody tr .Eligibility_Version_Date")
    .verify.elementPresent("table tbody tr .Consent_Date")
    .verify.elementPresent("table tbody tr .Arms")

  return this;
};
