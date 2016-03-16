

exports.command = function(username, password) {
  this
    .verify.elementPresent("#sidebarMenu")

    .verify.elementPresent("#findFormButtons")
      .verify.elementPresent("#FollowupButton")
      .verify.elementPresent("#SU2C_Biopsy_V3Button")
      .verify.elementPresent("#SU2C_Subsequent_Treatment_V1Button")
      .verify.elementPresent("#SU2C_Prior_TX_V3Button")
      .verify.elementPresent("#Prostate_Diagnosis_V4Button")
      .verify.elementPresent("#Blood_Labs_V2Button")
      .verify.elementPresent("#DemographicsButton")
      .verify.elementPresent("#ECOG_Weight_V3Button")
      .verify.elementPresent("#GU_Disease_Assessment_V3Button")
      .verify.elementPresent("#SU2C_Biopsy_AE_V1Button")
      .verify.elementPresent("#SU2C_Pr_Ca_Tx_Sumry_V2Button")
      .verify.elementPresent("#SU2C_Specimen_V1Button")
      .verify.elementPresent("#Patient_Enrollment_formButton")
      .verify.elementPresent("#Histology_ResearchButton")
      .verify.elementPresent("#Tissue_Specimen_formButton")
      .verify.elementPresent("#Blood_Specimen_formButton")
      .verify.elementPresent("#Histological_Assessment_formButton")
      .verify.elementPresent("#Laser_Capture_MicrodissectionButton")
      .verify.elementPresent("#RNASeq_completion_formButton")
      .verify.elementPresent("#Pathology_formButton")

  return this; // allows the command to be chained.
};
