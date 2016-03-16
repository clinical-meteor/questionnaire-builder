exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Date_of_CRPC_as_Defined_by_Treating_Physician")
    .verify.elementPresent("table tbody tr .Date_of_CRPC_as_Defined_by_Treating_Physician_Ext")
    .verify.elementPresent("table tbody tr .Date_of_First_Metastases")
    .verify.elementPresent("table tbody tr .Date_of_First_Metastases_Ext")
    .verify.elementPresent("table tbody tr .Disease_state_at_diagnosis")
    .verify.elementPresent("table tbody tr .PSA_Date")
    .verify.elementPresent("table tbody tr .PSA_Date_Ext")
    .verify.elementPresent("table tbody tr .PSA_Value_at_Diagnosis")
    .verify.elementPresent("table tbody tr .Phase")
    .verify.elementPresent("table tbody tr .Primary_Gleason_Score")
    .verify.elementPresent("table tbody tr .Secondary_Gleason_Score")
    .verify.elementPresent("table tbody tr .Segment")
    .verify.elementPresent("table tbody tr .Total_Gleason_Score")
    .verify.elementPresent("table tbody tr .Visit_Date")
    .verify.elementPresent("table tbody tr .Day")
    .verify.elementPresent("table tbody tr .Date_of_diagnosis")

  return this;
};
