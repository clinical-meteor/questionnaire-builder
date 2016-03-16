/*var histologyAssessment = {
  sampleId: "",
  core: "",
  blockImage: "",
  referenceSlideNumber: "",
  referenceSlideImages: "",
  blockStatus: ""
}*/

exports.command = function(histologyAssessment) {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Sample_ID"]')
    .verify.elementPresent('select[name="Cores.0.Core"]')
    .verify.elementPresent('input[name="Cores.0.BlockImage"]')
    .verify.elementPresent('input[name="Cores.0.ReferenceSlideNumber"]')
    .verify.elementPresent('input[name="Cores.0.ReferenceSlideImages"]')
    .verify.elementPresent('select[name="Cores.0.BlockStatus"]')

    if(histologyAssessment){
      this
        .clearValue('input[name="Sample_ID"]')
        .clearValue('select[name="Cores.0.Core')
        .clearValue('input[name="Cores.0.BlockImage"]')
        .clearValue('input[name="Cores.0.ReferenceSlideNumber"]')
        .clearValue('input[name="Cores.0.ReferenceSlideImages"]')
        .clearValue('select[name="Cores.0.BlockStatus"]')
        .pause(100)

        .setValue('input[name="Sample_ID"]', histologyAssessment.sampleId)
        .setValue('select[name="Cores.0.Core"]', histologyAssessment.core)
        .setValue('input[name="Cores.0.BlockImage"]', histologyAssessment.blockImage)
        .setValue('input[name="Cores.0.ReferenceSlideNumber"]', histologyAssessment.referenceSlideNumber)
        .setValue('input[name="Cores.0.ReferenceSlideImages"]', histologyAssessment.referenceSlideImages)
        .setValue('select[name="Cores.0.BlockStatus"]', histologyAssessment.blockStatus)
        .pause(1000)

        //.verify.attributeEquals('input[name="Sample_ID"]', "value", histologyAssessment.sampleId)
        .verify.attributeEquals('select[name="Cores.0.Core"]', "value", histologyAssessment.core)
        .verify.attributeEquals('input[name="Cores.0.BlockImage"]', "value", histologyAssessment.blockImage)
        .verify.attributeEquals('input[name="Cores.0.ReferenceSlideNumber"]', "value", histologyAssessment.referenceSlideNumber)
        .verify.attributeEquals('input[name="Cores.0.ReferenceSlideImages"]', "value", histologyAssessment.referenceSlideImages)
        .verify.attributeEquals('select[name="Cores.0.BlockStatus"]', "value", histologyAssessment.blockStatus)

        .verify.elementPresent('button[type="submit"]')
        .click('button[type="submit"]').pause(500)
    }

  return this;
};
