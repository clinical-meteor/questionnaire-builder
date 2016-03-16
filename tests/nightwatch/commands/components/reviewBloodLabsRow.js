exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Sample_ID")
    .verify.elementPresent("table tbody tr .Segment")
    .verify.elementPresent("table tbody tr .Visit_Date")
    .verify.elementPresent("table tbody tr .PSA__complexed__direct_measurement_")
    .verify.elementPresent("table tbody tr .TESTOSTERONE__TOTAL")
    .verify.elementPresent("table tbody tr .Alkaline_Phosphatase")
    .verify.elementPresent("table tbody tr .LDH_")
    .verify.elementPresent("table tbody tr .ANC")
    .verify.elementPresent("table tbody tr .HEMATOCRIT")
    .verify.elementPresent("table tbody tr .Hemoglobin")
    .verify.elementPresent("table tbody tr .Platelets")
    .verify.elementPresent("table tbody tr .RBC")
    .verify.elementPresent("table tbody tr .WBC")
    .verify.elementPresent("table tbody tr .WBC_Basophils")
    .verify.elementPresent("table tbody tr .WBC_Eosinophils")
    .verify.elementPresent("table tbody tr .WBC_Lymphocytes")
    .verify.elementPresent("table tbody tr .WBC_Monocytes")
    .verify.elementPresent("table tbody tr .WBC_Neutrophils")
    .verify.elementPresent("table tbody tr .Partial_Thromboplastin_Time____PTT_")
    .verify.elementPresent("table tbody tr .Prothrombin_Time__PT_")
    .verify.elementPresent("table tbody tr .Arm")
    .verify.elementPresent("table tbody tr .International_Normalized_Ratio__INR_")
    .verify.elementPresent("table tbody tr .Lab_Time")
    .verify.elementPresent("table tbody tr .Day")
    .verify.elementPresent("table tbody tr .Phase")

  return this;
};
