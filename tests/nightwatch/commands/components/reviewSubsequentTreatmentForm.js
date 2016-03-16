exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('input[name="BL_PSA"]')
    .verify.elementPresent('input[name="PSA_nadir"]')
    .verify.elementPresent('input[name="PSA_nadir_Date"]')
    .verify.elementPresent('input[name="PSA_nadir_Date_Ext"]')
    .verify.elementPresent('input[name="PSA_Response"]')
    .verify.elementPresent('input[name="RECIST_Response"]')
    .verify.elementPresent('input[name="Bone_Response"]')
    .verify.elementPresent('input[name="Progression_Date"]')
    .verify.elementPresent('input[name="Progression_Date_Ext"]')
    .verify.elementPresent('input[name="Resolved_Date"]')
    .verify.elementPresent('input[name="Drug_Name"]')
    .verify.elementPresent('input[name="Reason_for_Stopping_Treatment"]')
    .verify.elementPresent('input[name="Responder"]')
    .verify.elementPresent('input[name="ResponderEnzalutamide"]')
    .verify.elementPresent('input[name="ResponderAbiraterone"]')
    .verify.elementPresent('input[name="ResponderOtherTherapy"]')
    .verify.elementPresent('input[name="Best_Response"]')
    .verify.elementPresent('input[name="If_Progressive_Disease__Specify_Type"]')
    .verify.elementPresent('input[name="Treatment_Category"]')
    .verify.elementPresent('input[name="Treatment_Details"]')
    .verify.elementPresent('input[name="Start_Date"]')
    .verify.elementPresent('input[name="Start_Date_Ext"]')
    .verify.elementPresent('input[name="Stop_Date"]')
    .verify.elementPresent('input[name="Stop_Date_Ext"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="Reason_for_Stopping_Treatment_Details"]')
    .verify.elementPresent('input[name="If_other__specify"]')
    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="Phase"]')
    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Arm"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
