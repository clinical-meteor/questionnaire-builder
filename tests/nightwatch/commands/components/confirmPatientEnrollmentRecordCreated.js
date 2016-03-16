exports.command = function (patientEnrollmentRecord) {
  this
    .verify.elementPresent("#recordsListPage")

    .verify.elementPresent("#recordSearchInput")
      .clearValue('#recordSearchInput').pause(500)
      .clearValue('#recordSearchInput')

      // we're going to search by form name, not by patient name
      .setValue('#recordSearchInput', 'nro')

      // .setValue('#recordSearchInput', patientEnrollmentRecord.patientId)

    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")

    .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", patientEnrollmentRecord.patientId)

    .click("#recordsList .recordItem:nth-child(1)").pause(1000)

    .verify.attributeEquals('input[name="Patient_ID"]', "value", patientEnrollmentRecord.patientId)
    .verify.attributeEquals('input[name="Baseline_Sample_ID"]', "value", patientEnrollmentRecord.baselineSampleId)
    .verify.attributeEquals('input[name="Progression_Sample_ID"]', "value", patientEnrollmentRecord.progressionSampleId);

    // .verify.attributeEquals('select[name="institution"]', "value", patientEnrollmentRecord.institution)
    // .verify.attributeEquals('select[name="Baseline_Biopsy_Site"]', "value", patientEnrollmentRecord.baselineBiopsySite)
    // .verify.attributeEquals('select[name="Progression_Biopsy_Site"]', "value", patientEnrollmentRecord.progressionBiopsySite);

  return this;
};
