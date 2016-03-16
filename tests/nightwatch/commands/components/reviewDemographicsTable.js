exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Age")
    .verify.elementPresent("table thead tr .Study_Site")
    .verify.elementPresent("table thead tr .Current_Status")
    .verify.elementPresent("table thead tr .Ethnicity")
    .verify.elementPresent("table thead tr .Expired_Date")
    .verify.elementPresent("table thead tr .Last_Visit")
    .verify.elementPresent("table thead tr .Last_Visit_Date")
    .verify.elementPresent("table thead tr .Off_Study_Date")
    .verify.elementPresent("table thead tr .Off_Treatment_Date")
    .verify.elementPresent("table thead tr .On_Followup_Date")
    .verify.elementPresent("table thead tr .On_Study_Date")
    .verify.elementPresent("table thead tr .On_Treatment_Date")
    .verify.elementPresent("table thead tr .Race")
    .verify.elementPresent("table thead tr .Eligibility_Status")
    .verify.elementPresent("table thead tr .Eligibility_Status_Date")
    .verify.elementPresent("table thead tr .Eligibility_Version_Date")
    .verify.elementPresent("table thead tr .Consent_Date")
    .verify.elementPresent("table thead tr .Arms")

  return this;
};
