exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    .verify.elementPresent("table thead tr .Date_of_CRPC_as_Defined_by_Treating_Physician")
    .verify.elementPresent("table thead tr .Date_of_CRPC_as_Defined_by_Treating_Physician_Ext")
    .verify.elementPresent("table thead tr .Date_of_First_Metastases")
    .verify.elementPresent("table thead tr .Date_of_First_Metastases_Ext")
    .verify.elementPresent("table thead tr .Disease_state_at_diagnosis")
    .verify.elementPresent("table thead tr .PSA_Date")
    .verify.elementPresent("table thead tr .PSA_Date_Ext")
    .verify.elementPresent("table thead tr .PSA_Value_at_Diagnosis")
    .verify.elementPresent("table thead tr .Phase")
    .verify.elementPresent("table thead tr .Primary_Gleason_Score")
    .verify.elementPresent("table thead tr .Secondary_Gleason_Score")
    .verify.elementPresent("table thead tr .Segment")
    .verify.elementPresent("table thead tr .Total_Gleason_Score")
    .verify.elementPresent("table thead tr .Visit_Date")
    .verify.elementPresent("table thead tr .Day")
    .verify.elementPresent("table thead tr .Date_of_diagnosis")

  return this;
};
