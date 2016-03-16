    /*var rnaSequenceRecord = {
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


exports.command = function(rnaSequenceRecord, rowIndex) {
  this
    .verify.elementPresent("table tbody tr")
    .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ")")

    if(rnaSequenceRecord){
      this
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .QC_reports")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .RIN_score_from_UCSF")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .date_completed")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .date_received")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .library_prep_used")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .library_prep_notes")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .location_of_fastq_file")

        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID", rnaSequenceRecord.patientId )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .QC_reports", rnaSequenceRecord.qcReports )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .RIN_score_from_UCSF", rnaSequenceRecord.rinScoreFromUcsf )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .date_completed", rnaSequenceRecord.rinScoreFromUcsf )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .date_received", rnaSequenceRecord.dateCompleted )
        //.verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .library_prep_used", rnaSequenceRecord.libraryPrepUsed )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .library_prep_notes", rnaSequenceRecord.libraryPrepNotes )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .location_of_fastq_file", rnaSequenceRecord.locationOfFastqFile )

    }


  return this;
};
