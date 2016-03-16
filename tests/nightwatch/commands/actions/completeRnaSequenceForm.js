

/*var rnaSequence = {
  patientId: "",
  lncapControlSource: "",
  qcReports: "",
  rinScoreFromUcsf: "",
  dateCompleted: "",
  dateReceived: "",
  libraryPrepUsed: "",
  libraryPrepNotes: "",
  locationOfFastqFile: "",
  lncapControlSource: ""
}*/

exports.command = function(rnaSequence) {
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

    if(rnaSequence){
      this
        .clearValue('input[name="Patient_ID"]')
        .clearValue('input[name="QC_reports"]')
        .clearValue('input[name="RIN_score_from_UCSF"]')
        .clearValue('input[name="date_completed"]')
        .clearValue('input[name="date_received"]')
        .clearValue('select[name="library_prep_used"]')
        .clearValue('input[name="library_prep_notes"]')
        .clearValue('input[name="location_of_fastq_file"]')
        .pause(500)

        .setValue('input[name="Patient_ID"]', rnaSequence.patientId )
        .setValue('input[name="QC_reports"]', rnaSequence.qcReports )
        .setValue('input[name="RIN_score_from_UCSF"]', rnaSequence.rinScoreFromUcsf )
        .setValue('input[name="date_completed"]', rnaSequence.dateCompleted )
        .setValue('input[name="date_received"]', rnaSequence.dateReceived )
        .setValue('select[name="library_prep_used"]', rnaSequence.libraryPrepUsed )
        .setValue('input[name="library_prep_notes"]', rnaSequence.libraryPrepNotes )
        .setValue('input[name="location_of_fastq_file"]', rnaSequence.locationOfFastqFile )

        .verify.elementPresent('button[type="submit"]')
        .click('button[type="submit"]').pause(500)
    }


  return this;
};
