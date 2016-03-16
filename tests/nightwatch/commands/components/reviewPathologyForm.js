exports.command = function () {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('select[name="Tumor_Content"]')
    .verify.elementPresent('select[name="Preliminary_Histology"]')
    .verify.elementPresent('select[name="Final_Histology"]')
    .verify.elementPresent('select[name="AR-FISH_IHC"]')
    .verify.elementPresent('select[name="PSA_IHC"]')
    .verify.elementPresent('select[name="CHGA_IHC"]')
    .verify.elementPresent('select[name="AR-FISH_test_performed"]')
    .verify.elementPresent('input[name="AR_chromosomeX_ratio"]')
    .verify.elementPresent('select[name="ION_Torrent_test_performed"]')
    .verify.elementPresent('select[name="PTEN_IHC"]')
    .verify.elementPresent('select[name="PTEN_test_performed"]')

    .verify.elementPresent('button[type="submit"]');

  return this;
};
