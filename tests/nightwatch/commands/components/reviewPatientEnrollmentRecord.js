exports.command = function (patientEnrollmentRecord) {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('select[name="Study_Site"]')
    .verify.elementPresent('input[name="Baseline_Sample_ID"]')
    .verify.elementPresent('select[name="Baseline_Biopsy_Site"]')
    .verify.elementPresent('input[name="Progression_Sample_ID"]')
    .verify.elementPresent('select[name="Progression_Biopsy_Site"]')

    .verify.attributeEquals('input[name="Patient_ID"]', "value", patientEnrollmentRecord.Patient_ID)
    .verify.attributeEquals('input[name="Baseline_Sample_ID"]', "value", patientEnrollmentRecord.Baseline_Sample_ID)
    .verify.attributeEquals('input[name="Progression_Sample_ID"]', "value", patientEnrollmentRecord.Progression_Sample_ID);

    // .verify.attributeEquals('select[name="Study_Site"]', "value", "")
    // .verify.attributeEquals('select[name="Baseline_Biopsy_Site"]', "value", "")
    // .verify.attributeEquals('select[name="Progression_Biopsy_Site"]', "value", "")

  return this;
};
