/*var bloodSpecimen = {
  patientId: "",
  timepoint: "",
  drawDate: "",
  crcAtCollection: ""
}*/

exports.command = function(bloodSpecimen) {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('select[name="Timepoint"]')
    .verify.elementPresent('input[name="Draw_Date"]')
    .verify.elementPresent('input[name="CRC_at_Collection"]')

    if(bloodSpecimen){
      this
        .setValue('input[name="Patient_ID"]', bloodSpecimen.patientId)
        .setValue('select[name="Timepoint"]', bloodSpecimen.timepoint)
        .setValue('input[name="Draw_Date"]', bloodSpecimen.drawDate)
        .setValue('input[name="CRC_at_Collection"]', bloodSpecimen.crcAtCollection)

        .verify.elementPresent('button[type="submit"]')
        .click('button[type="submit"]').pause(500)
    }

  return this;
};
