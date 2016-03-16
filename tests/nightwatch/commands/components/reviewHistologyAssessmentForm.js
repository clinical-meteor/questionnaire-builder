exports.command = function() {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('select[name="Cores.0.Core"]')
    .verify.elementPresent('input[name="Cores.0.BlockImage"]')
    .verify.elementPresent('input[name="Cores.0.ReferenceSlideNumber"]')
    .verify.elementPresent('input[name="Cores.0.ReferenceSlideImages"]')
    .verify.elementPresent('select[name="Cores.0.BlockStatus"]')

    .verify.elementPresent('button[type="submit"]')

  return this;
};
