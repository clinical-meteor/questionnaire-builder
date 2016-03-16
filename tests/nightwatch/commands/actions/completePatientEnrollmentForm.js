exports.command = function (patientRecord) {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('select[name="Study_Site"]')
    .verify.elementPresent("#saveDataButton");

  if (patientRecord){

    this
      .clearValue('input[name="Patient_ID"]')
      .clearValue('select[name="Study_Site"]')
      .clearValue('input[name="Baseline_Sample_ID"]')
      .clearValue('select[name="Baseline_Biopsy_Site"]')
      .clearValue('input[name="Progression_Sample_ID"]')
      .clearValue('select[name="Progression_Biopsy_Site"]')
      .pause(500)

      .setValue('input[name="Patient_ID"]', patientRecord.patientId)
      .setValue('select[name="Study_Site"]', patientRecord.institution)

      .clearValue('input[name="Baseline_Biopsy_Date"]')
      .setValue('input[name="Baseline_Sample_ID"]', patientRecord.baselineSampleId)

      .setValue('input[name="Baseline_Biopsy_Date"]', patientRecord.baselineBiopsyDate).pause(500)
      .setValue('select[name="Baseline_Biopsy_Site"]', patientRecord.baselineBiopsySite)

      .setValue('input[name="Progression_Sample_ID"]', patientRecord.progressionSampleId)
      .clearValue('input[name="Progression_Biopsy_Date"]')

      .setValue('input[name="Progression_Biopsy_Date"]', patientRecord.progressionBiopsyDate).pause(500)
      .setValue('select[name="Progression_Biopsy_Site"]', patientRecord.progressionBiopsySite)

      .verify.elementPresent("#saveDataButton")
      .click("#saveDataButton").pause(1000);
  }

  return this;
};
