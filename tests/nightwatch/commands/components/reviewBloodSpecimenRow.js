    /*var bloodSpecimenRecord = {
      patientId: "",
      timepoint: "",
      drawDate: "",
      crcAtCollection: ""
    }
    */


exports.command = function(bloodSpecimenRecord, rowIndex) {
  this
    .verify.elementPresent("table tbody tr")
    .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ")")

    if(bloodSpecimenRecord){
      this
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Timepoint")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Draw_Date")
        .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .CRC_at_Collection")

        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Patient_ID", bloodSpecimenRecord.patientId )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Timepoint", bloodSpecimenRecord.timepoint )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Draw_Date", bloodSpecimenRecord.drawDate )
        .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .CRC_at_Collection", bloodSpecimenRecord.crcAtCollection )

    }


  return this;
};
