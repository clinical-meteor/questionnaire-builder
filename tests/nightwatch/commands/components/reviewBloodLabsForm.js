exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('input[name="Segment"]')
    .verify.elementPresent('input[name="Visit_Date"]')
    .verify.elementPresent('input[name="PSA__complexed__direct_measurement_"]')
    .verify.elementPresent('input[name="TESTOSTERONE__TOTAL"]')
    .verify.elementPresent('input[name="Alkaline_Phosphatase"]')
    .verify.elementPresent('input[name="LDH_"]')
    .verify.elementPresent('input[name="ANC"]')
    .verify.elementPresent('input[name="HEMATOCRIT"]')
    .verify.elementPresent('input[name="Hemoglobin"]')
    .verify.elementPresent('input[name="Platelets"]')
    .verify.elementPresent('input[name="RBC"]')
    .verify.elementPresent('input[name="WBC"]')
    .verify.elementPresent('input[name="WBC_Basophils"]')
    .verify.elementPresent('input[name="WBC_Eosinophils"]')
    .verify.elementPresent('input[name="WBC_Lymphocytes"]')
    .verify.elementPresent('input[name="WBC_Monocytes"]')
    .verify.elementPresent('input[name="WBC_Neutrophils"]')
    .verify.elementPresent('input[name="Partial_Thromboplastin_Time____PTT_"]')
    .verify.elementPresent('input[name="Prothrombin_Time__PT_"]')
    .verify.elementPresent('input[name="Arm"]')
    .verify.elementPresent('input[name="International_Normalized_Ratio__INR_"]')
    .verify.elementPresent('input[name="Lab_Time"]')
    .verify.elementPresent('input[name="Day"]')
    .verify.elementPresent('input[name="Phase"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
