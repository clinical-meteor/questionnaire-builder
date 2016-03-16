exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')

    .verify.elementPresent('input[name="QC_reports"]')
    .verify.elementPresent('input[name="RIN_score_from_UCSF"]')
    .verify.elementPresent('input[name="date_completed"]')
    .verify.elementPresent('input[name="date_received"]')
    .verify.elementPresent('select[name="library_prep_used"]')
    .verify.elementPresent('input[name="library_prep_notes"]')
    .verify.elementPresent('input[name="location_of_fastq_file"]')

    .verify.elementPresent('button[type="submit"]');

  return this;
};
