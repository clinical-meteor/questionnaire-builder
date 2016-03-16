exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Patient_ID")
    //.verify.elementPresent("table thead tr .LNCAP_control_source")
    .verify.elementPresent("table thead tr .QC_reports")
    .verify.elementPresent("table thead tr .RIN_score_from_UCSF")
    .verify.elementPresent("table thead tr .date_completed")
    .verify.elementPresent("table thead tr .date_received")
    .verify.elementPresent("table thead tr .library_prep_used")
    .verify.elementPresent("table thead tr .library_prep_notes")
    .verify.elementPresent("table thead tr .location_of_fastq_file")

  return this;
};
