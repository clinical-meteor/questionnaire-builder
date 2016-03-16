exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('select[name="Study_Site"]')
    .verify.elementPresent('input[name="Baseline_Sample_ID"]')
    .verify.elementPresent('select[name="Baseline_Biopsy_Site"]')
    .verify.elementPresent('input[name="Progression_Sample_ID"]')
    .verify.elementPresent('select[name="Progression_Biopsy_Site"]')

    // .verify.elementPresent('button[type="submit"]')
    .verify.elementPresent("#saveQuestionnaireButton");

  return this;
};
