exports.command = function() {
  this
    .verify.elementPresent("table tbody")
    .verify.elementPresent("table tbody tr")

    .verify.elementPresent("table tbody tr .Patient_ID")
    .verify.elementPresent("table tbody tr .Sample_ID")
    .verify.elementPresent("table tbody tr .Drug_Name")
    .verify.elementPresent("table tbody tr .Treatment_Details")
    .verify.elementPresent("table tbody tr .BL_PSA")
    .verify.elementPresent("table tbody tr .Bone_Response")
    .verify.elementPresent("table tbody tr .PSA_Response")
    .verify.elementPresent("table tbody tr .PSA_nadir")
    .verify.elementPresent("table tbody tr .PSA_nadir_Date")
    .verify.elementPresent("table tbody tr .PSA_nadir_Date_Ext")
    .verify.elementPresent("table tbody tr .Progression_Date")
    .verify.elementPresent("table tbody tr .Progression_Date_Ext")
    .verify.elementPresent("table tbody tr .RECIST_Response")
    .verify.elementPresent("table tbody tr .Start_Date")
    .verify.elementPresent("table tbody tr .Start_Date_Ext")
    .verify.elementPresent("table tbody tr .Stop_Date")
    .verify.elementPresent("table tbody tr .Stop_Date_Ext")
    .verify.elementPresent("table tbody tr .If_Progressive_Disease__Specify_Type")
    .verify.elementPresent("table tbody tr .Reason_for_Stopping_Treatment")
    .verify.elementPresent("table tbody tr .Reason_for_Stopping_Treatment_Details")
    .verify.elementPresent("table tbody tr .If_other__specify")
    .verify.elementPresent("table tbody tr .Treatment_Category")
    .verify.elementPresent("table tbody tr .Visit_Date")
    .verify.elementPresent("table tbody tr .Phase")
    .verify.elementPresent("table tbody tr .Segment")
    .verify.elementPresent("table tbody tr .Arm")
    .verify.elementPresent("table tbody tr .Day")


  return this;
};
