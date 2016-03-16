exports.command = function (bloodSpecimenRecord) {
  this
    .verify.elementPresent("#recordsListPage")

    .verify.elementPresent("#recordSearchInput")
      .clearValue('#recordSearchInput')
      // we're going to search by form name, not by patient name
      .setValue('#recordSearchInput', 'd S')

    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")

    .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", bloodSpecimenRecord.patientId)

    .click("#recordsList .recordItem:nth-child(1)").pause(1000)

    .verify.elementPresent("#recordUpsertCard").pause(500)

    .verify.attributeEquals('input[name="Patient_ID"]', "value", bloodSpecimenRecord.patientId)
    .verify.attributeEquals('select[name="Timepoint"]', "value", bloodSpecimenRecord.timepoint)
    // .verify.attributeEquals('input[name="Draw_Date"]', "value", bloodSpecimenRecord.drawDate)
    .verify.attributeEquals('input[name="CRC_at_Collection"]', "value", bloodSpecimenRecord.crcAtCollection);

  return this;
};
