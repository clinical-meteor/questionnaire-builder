    /*
      var patientEnrollmentRecord = {
        patientId: "DTB-999",
        institution: "OHSU",
        baselineSampleId: "123",
        baselineBiopsyDate: "2015-01-01",
        baselineBiopsySite: "Bone"
      }
    */


exports.command = function(patientEnrollmentRecord, rowIndex) {
  this
    .verify.elementPresent("table tbody tr")
    .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ")")

    if(patientEnrollmentRecord){
      this
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Study_Site")

        // ISSUE #9 - this fails because m-dash is getting replaced with n-dash
        //.verify.value("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID span", patientEnrollmentRecord.patientId )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Study_Site", patientEnrollmentRecord.institution )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Baseline_Sample_ID", patientEnrollmentRecord.baselineSampleId )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Baseline_Biopsy_Date", patientEnrollmentRecord.baselineBiopsyDate )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Baseline_Biopsy_Site", patientEnrollmentRecord.baselineBiopsySite )
    }

  return this;
};
