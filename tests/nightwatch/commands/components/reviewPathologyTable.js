exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Tumor_Content")
    .verify.elementPresent("table thead tr .Preliminary_Histology")
    .verify.elementPresent("table thead tr .Final_Histology")
    .verify.elementPresent("table thead tr .AR-FISH_IHC")
    .verify.elementPresent("table thead tr .PSA_IHC")
    .verify.elementPresent("table thead tr .CHGA_IHC")
    .verify.elementPresent("table thead tr .AR-FISH_test_performed")
    .verify.elementPresent("table thead tr .AR_chromosomeX_ratio")
    //.verify.elementPresent("table thead tr .AR_amplification")
    .verify.elementPresent("table thead tr .ION_Torrent_test_performed")
    .verify.elementPresent("table thead tr .PTEN_IHC")
    .verify.elementPresent("table thead tr .PTEN_test_performed")

  return this;
};
