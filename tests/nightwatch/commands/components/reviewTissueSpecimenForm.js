exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('select[name="Timepoint"]')
    .verify.elementPresent('input[name="Procedure_Date"]')
    //.verify.elementPresent('select[name="Biopsy_Site"]')

    .verify.elementPresent('input[name="Attending_Radiologist"]')
    .verify.elementPresent('input[name="CRC_at_Collection"]')
    .verify.elementPresent('input[name="Number_of_Cores"]')

    .verify.elementPresent('select[name="Cores.0.ID"]')
    .verify.elementPresent('select[name="Cores.0.Core"]')

    .verify.elementPresent('input[name="Fixed_Core_Ship_Date"]')
    .verify.elementPresent('input[name="Box_ID"]')
    .verify.elementPresent('input[name="Freezer"]')    

    .verify.elementPresent('input[name="Core_Notes"]')
    .verify.elementPresent('input[name="TimepointNotes"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
