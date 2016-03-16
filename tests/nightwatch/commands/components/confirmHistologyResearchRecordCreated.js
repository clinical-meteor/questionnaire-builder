exports.command = function (histologyResearchRecord) {
  this
    .sectionBreak('.confirmHistologyResearchRecordCreated()')
    .verify.elementPresent("#recordsListPage")

    .verify.elementPresent("#recordSearchInput")
      .clearValue('#recordSearchInput')
      .setValue('#recordSearchInput', 'l R')

    .verify.elementPresent("#recordsList")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1)")
    .verify.elementPresent("#recordsList .recordItem:nth-child(1) .titleText")

    .verify.containsText("#recordsList .recordItem:nth-child(1) .titleText", histologyResearchRecord.patientId)

    .click("#recordsList .recordItem:nth-child(1)").pause(1000)

    .verify.elementPresent("#recordUpsertCard").pause(500)

    .verify.attributeEquals('input[name="Sample_ID"]', 'value', histologyResearchRecord.sampleId)
    .verify.attributeEquals('select[name="Histology_Call"]', 'value', histologyResearchRecord.histologyCall)
    .verify.attributeEquals('input[name="Adeno"]', 'value', histologyResearchRecord.adeno)
    .verify.attributeEquals('input[name="Small_Cell"]', 'value', histologyResearchRecord.smallCell)
    .verify.attributeEquals('input[name="Trichotomy"]', 'value', histologyResearchRecord.trichotomy)



  return this;
};
