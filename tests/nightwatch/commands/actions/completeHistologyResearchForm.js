/*
var histologyResearchRecord = {
  sampleId: "",
  mutatedGenes: "",
  immunohistochemistry: "",
  histologyCall: "",
  adeno: "",
  smallCell: "",
  trichotomy: ""
}*/



exports.command = function (histologyResearchRecord) {
  this
    .sectionBreak('.completeHistologyResearchForm()')

    .verify.elementPresent('input[name="Sample_ID"]')
    .verify.elementPresent('select[name="Histology_Call"]')
    .verify.elementPresent('input[name="Adeno"]')
    .verify.elementPresent('input[name="Small_Cell"]')
    .verify.elementPresent('input[name="Trichotomy"]')

    if(histologyResearchRecord){
      this
        .clearValue('input[name="Sample_ID"]')
        .clearValue('select[name="Histology_Call"]')
        .clearValue('input[name="Adeno"]')
        .clearValue('input[name="Small_Cell"]')
        .clearValue('input[name="Trichotomy"]')
        .pause(500)

        .setValue('input[name="Patient_ID"]', histologyResearchRecord.patientId)
        .setValue('input[name="Sample_ID"]', histologyResearchRecord.sampleId)
        .setValue('select[name="Histology_Call"]', histologyResearchRecord.histologyCall).pause(1000)

        // ?
        .setValue('input[name="Adeno"]', histologyResearchRecord.adeno).pause(1000)
        .setValue('input[name="Small_Cell"]', histologyResearchRecord.smallCell).pause(1000)
        .setValue('input[name="Trichotomy"]', histologyResearchRecord.trichotomy).pause(1000)

        // these should be autopopulated
        //.verify.attributeEquals('input[name="Sample_ID"]', 'value', histologyResearchRecord.sampleId)
        .verify.attributeEquals('select[name="Histology_Call"]', 'value', histologyResearchRecord.histologyCall)
        .verify.attributeEquals('input[name="Adeno"]', 'value', histologyResearchRecord.adeno)
        .verify.attributeEquals('input[name="Small_Cell"]', 'value', histologyResearchRecord.smallCell)
        .verify.attributeEquals('input[name="Trichotomy"]', 'value', histologyResearchRecord.trichotomy)

        .verify.elementPresent('button[type="submit"]')
        .click('button[type="submit"]').pause(500)
      }


  return this;
};
