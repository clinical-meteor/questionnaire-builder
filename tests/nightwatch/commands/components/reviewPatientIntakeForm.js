exports.command = function (newPatientEnrollment) {
  this
    // .verify.elementPresent('#metadataUpsertPage')
    //.verify.elementPresent('#newRecordForm')

    .verify.elementPresent('input[name="institutionName"]')
    .verify.elementPresent('input[name="institutionId"]')

    .verify.elementPresent('input[name="participantId"]')
    .verify.elementPresent('input[name="physicianName"]')
    .verify.elementPresent('input[name="studyName"]')
    .verify.elementPresent('input[name="studyId"]')
    .verify.elementPresent('input[name="patientAge"]')
    .verify.elementPresent('input[name="patientGender"]')
    .verify.elementPresent('input[name="diagnosisCode"]')
    .verify.elementPresent('input[name="diseaseSubtype"]')
    .verify.elementPresent('input[name="lastFollowUpDate"]')

    .verify.elementPresent('textarea[name="diagnosisDescription"]')
    .verify.elementPresent('textarea[name="priorTreatmentHistory"]')
    .verify.elementPresent('textarea[name="complicatingConditions"]')
    .verify.elementPresent('textarea[name="currentStatus"]')
    .verify.elementPresent('textarea[name="familyHistory"]')
    .verify.elementPresent('textarea[name="molecularTesting"]')
    .verify.elementPresent('textarea[name="actionableFindings"]')
    .verify.elementPresent('textarea[name="genomicAnalysis"]')
    .verify.elementPresent('textarea[name="biopsySource"]')
    .verify.elementPresent('textarea[name="tumorCellFraction"]')
    .verify.elementPresent('textarea[name="otherStudies"]');

  if (newPatientEnrollment) {
    if (newPatientEnrollment.institutionName) {
      this.verify.attributeEquals('input[name="institutionName"]', "value", newPatientEnrollment.institutionName);
    }
    if (newPatientEnrollment.institutionId) {
      this.verify.attributeEquals('input[name="institutionId"]', "value", newPatientEnrollment.institutionId);
    }
    if (newPatientEnrollment.participantId) {
      this.verify.attributeEquals('input[name="participantId"]', "value", newPatientEnrollment.participantId);
    }
    if (newPatientEnrollment.physicianName) {
      this.verify.attributeEquals('input[name="physicianName"]', "value", newPatientEnrollment.physicianName);
    }
    if (newPatientEnrollment.studyName) {
      this.verify.attributeEquals('input[name="studyName"]', "value", newPatientEnrollment.studyName);
    }
    if (newPatientEnrollment.studyId) {
      this.verify.attributeEquals('input[name="studyId"]', "value", newPatientEnrollment.studyId);
    }
    if (newPatientEnrollment.patientAge) {
      this.verify.attributeEquals('input[name="patientAge"]', "value", newPatientEnrollment.patientAge);
    }
    if (newPatientEnrollment.patientGender) {
      this.verify.attributeEquals('input[name="patientGender"]', "value", newPatientEnrollment.patientGender);
    }
    if (newPatientEnrollment.diseaseSubtype) {
      this.verify.attributeEquals('input[name="diseaseSubtype"]', "value", newPatientEnrollment.diseaseSubtype);
    }
    if (newPatientEnrollment.lastFollowUpDate) {
      this.verify.attributeEquals('input[name="lastFollowUpDate"]', "value", newPatientEnrollment.lastFollowUpDate);
    }
  }

  this
    .verify.elementPresent("#saveDataButton");
  return this;
};
