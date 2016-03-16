exports.command = function (laserCaptureRecord) {
  this
    .verify.elementPresent("#recordsListPage")

    .verify.elementPresent("#recordSearchInput")
      .clearValue('#recordSearchInput')
      // we're going to search by form name, not by patient name
      .setValue('#recordSearchInput', 'Las')

    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")

    .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", laserCaptureRecord.patientId)

    .click("#recordsList .recordItem:nth-child(1)").pause(1000)

    .verify.elementPresent("#recordUpsertCard").pause(500)

    .verify.attributeEquals('input[name="Sample_ID"]', "value", laserCaptureRecord.sampleId )
    .verify.attributeEquals('select[name="Core"]', "value", laserCaptureRecord.core )
    // .verify.attributeEquals('input[name="Completion_Date"]', "value", laserCaptureRecord.completionDate )
    .verify.attributeEquals('input[name="SlideNumber"]', "value", laserCaptureRecord.slideNumber )
    .verify.attributeEquals('input[name="Estimated_total_capture_area"]', "value", laserCaptureRecord.estimatedTotalCaptureArea )
    .verify.attributeEquals('input[name="Lysates"]', "value", laserCaptureRecord.lysates )
    .verify.attributeEquals('input[name="Lysates_Volume"]', "value", laserCaptureRecord.lystatesVolume )
    .verify.attributeEquals('select[name="Downstream_use"]', "value", laserCaptureRecord.downstreamUse );

  return this;
};
