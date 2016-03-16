exports.command = function (pathologyRecord) {
  this
    .verify.elementPresent("#recordsListPage")

    .verify.elementPresent("#recordSearchInput")
      .clearValue('#recordSearchInput')
      // we're going to search by form name, not by patient name
      .setValueSlowly('#recordSearchInput', 'Path')

    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")

    .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", pathologyRecord.patientId)

    .click("#recordsList .recordItem:nth-child(1)").pause(1000)

    .verify.elementPresent("#recordUpsertCard").pause(500)

    .verify.attributeEquals('#recordUpsertCard input[name="Patient_ID"]', "value", pathologyRecord.patientId)
    .verify.attributeEquals('#recordUpsertCard input[name="Sample_ID"]', "value", pathologyRecord.sampleId)
    .verify.attributeEquals('#recordUpsertCard input[name="AR_chromosomeX_ratio"]', "value", pathologyRecord.arChromosomeXRatio)

    .verify.attributeEquals('#recordUpsertCard select[name="Tumor_Content"]', "value", pathologyRecord.tumorContent)
    .verify.attributeEquals('#recordUpsertCard select[name="Preliminary_Histology"]', "value", pathologyRecord.preliminaryHistology)
    .verify.attributeEquals('#recordUpsertCard select[name="Final_Histology"]', "value", pathologyRecord.finalHistology)
    .verify.attributeEquals('#recordUpsertCard select[name="AR-FISH_IHC"]', "value", pathologyRecord.arFishIhc)
    .verify.attributeEquals('#recordUpsertCard select[name="PSA_IHC"]', "value", pathologyRecord.psaIhc)
    .verify.attributeEquals('#recordUpsertCard select[name="CHGA_IHC"]', "value", pathologyRecord.chgaIhc)
    .verify.attributeEquals('#recordUpsertCard select[name="AR-FISH_test_performed"]', "value", pathologyRecord.arFishPerformed)
    .verify.attributeEquals('#recordUpsertCard select[name="ION_Torrent_test_performed"]', "value", pathologyRecord.ionTorrentTestPerformed)
    .verify.attributeEquals('#recordUpsertCard select[name="PTEN_IHC"]', "value", pathologyRecord.ptenIhc)
    .verify.attributeEquals('#recordUpsertCard select[name="PTEN_test_performed"]', "value", pathologyRecord.ptenTestPerformed);

  return this;
};
