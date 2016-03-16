exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')

    .verify.elementPresent('select[name="Timepoint"]')
    .verify.elementPresent('input[name="Draw_Date"]')
    .verify.elementPresent('input[name="CRC_at_Collection"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
