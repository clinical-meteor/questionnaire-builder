exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('select[name="Core"]')
    .verify.elementPresent('input[name="Completion_Date"]')
    .verify.elementPresent('input[name="SlideNumber"]')
    .verify.elementPresent('input[name="Estimated_total_capture_area"]')
    .verify.elementPresent('input[name="Lysates"]')
    .verify.elementPresent('input[name="Lysates_Volume"]')
    .verify.elementPresent('select[name="Downstream_use"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
