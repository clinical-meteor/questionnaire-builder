exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')

    .verify.elementPresent('input[name="Date_of_CRPC_as_Defined_by_Treating_Physician"]')
    .verify.elementPresent('input[name="Date_of_CRPC_as_Defined_by_Treating_Physician_Ext"]')
    .verify.elementPresent('input[name="Date_of_First_Metastases"]')
    .verify.elementPresent('input[name="Date_of_First_Metastases_Ext"]')
    .verify.elementPresent('input[name="Disease_state_at_diagnosis"]')
    .verify.elementPresent('input[name="PSA_Date"]')
    .verify.elementPresent('input[name="PSA_Date_Ext"]')
    .verify.elementPresent('input[name="PSA_Value_at_Diagnosis"]')
    .verify.elementPresent('input[name="Phase"]')
    .verify.elementPresent('input[name="Primary_Gleason_Score"]')
    .verify.elementPresent('input[name="Secondary_Gleason_Score"]')
    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Total_Gleason_Score"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="Date_of_diagnosis"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
