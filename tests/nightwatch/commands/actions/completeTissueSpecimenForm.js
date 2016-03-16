

/*var tissueSpecimen = {
  patientId: "",
  timepoint: "",
  procedureDate: "",
  biopsySite: "",
  attendingRadiologist: "",
  crcAtCollection: "",
  numberOfCores: "",
  coresId: "",
  coresCore: "",
  fixedCoreShipDate: "",
  boxId: "",
  coreNotes: "",
  timepointNotes: ""
}*/

exports.command = function(tissueSpecimen) {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Sample_ID"]')
    .verify.elementPresent('select[name="Timepoint"]')
    .verify.elementPresent('input[name="Procedure_Date"]')
    .verify.elementPresent('input[name="Attending_Radiologist"]')
    .verify.elementPresent('input[name="CRC_at_Collection"]')
    .verify.elementPresent('input[name="Number_of_Cores"]')
    .verify.elementPresent('select[name="Cores.0.ID"]')
    .verify.elementPresent('select[name="Cores.0.Core"]')
    .verify.elementPresent('input[name="Fixed_Core_Ship_Date"]')
    .verify.elementPresent('input[name="Freezer"]')
    .verify.elementPresent('input[name="Box_ID"]')
    .verify.elementPresent('input[name="Core_Notes"]')
    .verify.elementPresent('input[name="TimepointNotes"]')

    if(tissueSpecimen){
      this
        .clearValue('input[name="Sample_ID"]')
        .clearValue('select[name="Timepoint"]')
        .clearValue('input[name="Procedure_Date"]')
        .clearValue('input[name="Attending_Radiologist"]')
        .clearValue('input[name="CRC_at_Collection"]')
        .clearValue('input[name="Number_of_Cores"]')
        .clearValue('select[name="Cores.0.ID"]')
        .clearValue('select[name="Cores.0.Core"]')
        .clearValue('input[name="Fixed_Core_Ship_Date"]')
        .clearValue('input[name="Freezer"]')
        .clearValue('input[name="Box_ID"]')
        .clearValue('input[name="Core_Notes"]')
        .clearValue('input[name="TimepointNotes"]')
        .pause(500)

        .setValue('input[name="Sample_ID"]', tissueSpecimen.sampleId )
        .setValue('select[name="Timepoint"]', tissueSpecimen.timepoint )
        .setValue('input[name="Procedure_Date"]', tissueSpecimen.procedureDate )
        .setValue('input[name="Attending_Radiologist"]', tissueSpecimen.attendingRadiologist )
        .setValue('input[name="CRC_at_Collection"]', tissueSpecimen.crcAtCollection )
        .setValue('input[name="Number_of_Cores"]', tissueSpecimen.numberOfCores )
        .setValue('select[name="Cores.0.ID"]', tissueSpecimen.coresId ).pause(200)
        .setValue('select[name="Cores.0.Core"]', tissueSpecimen.coresCore ).pause(200)
        .setValue('input[name="Fixed_Core_Ship_Date"]', tissueSpecimen.fixedCoreShipDate )
        .setValue('input[name="Freezer"]', tissueSpecimen.frozen )
        .setValue('input[name="Box_ID"]', tissueSpecimen.boxId )
        .setValue('input[name="Core_Notes"]', tissueSpecimen.coreNotes )
        .setValue('input[name="TimepointNotes"]', tissueSpecimen.timepointNotes )

        .verify.elementPresent('button[type="submit"]')
        .click('button[type="submit"]').pause(500)
    }


  return this;
};
