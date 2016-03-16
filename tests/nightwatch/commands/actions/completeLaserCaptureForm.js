/*
var laserCapture = {
  patientId: "",
  core: "",
  completionDate: "",
  slideNumber: "",
  estimatedTotalCaptureArea: "",
  lysates: "",
  lystatesVolume: "",
  downstreamUse: ""
}*/


exports.command = function(laserCapture) {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Sample_ID"]')
    .verify.elementPresent('select[name="Core"]')
    .verify.elementPresent('input[name="Completion_Date"]')
    .verify.elementPresent('input[name="SlideNumber"]')
    .verify.elementPresent('input[name="Estimated_total_capture_area"]')
    .verify.elementPresent('input[name="Lysates"]')
    .verify.elementPresent('input[name="Lysates_Volume"]')
    .verify.elementPresent('select[name="Downstream_use"]');

    if (laserCapture){
      this
        .clearValue('input[name="Sample_ID"]')
        .clearValue('select[name="Core"]')
        .clearValue('input[name="Completion_Date"]')
        .clearValue('input[name="SlideNumber"]')
        .clearValue('input[name="Estimated_total_capture_area"]')
        .clearValue('input[name="Lysates"]')
        .clearValue('input[name="Lysates_Volume"]')
        .clearValue('select[name="Downstream_use"]')
        .pause(1000)

        .setValue('input[name="Patient_ID"]', laserCapture.patientId )
        .setValue('input[name="Sample_ID"]', laserCapture.sampleId )
        .setValue('select[name="Core"]', laserCapture.core )
        .setValue('input[name="Completion_Date"]', laserCapture.completionDate )
        .setValue('input[name="SlideNumber"]', laserCapture.slideNumber )
        .setValue('input[name="Estimated_total_capture_area"]', laserCapture.estimatedTotalCaptureArea )
        .setValue('input[name="Lysates"]', laserCapture.lysates )
        .setValue('input[name="Lysates_Volume"]', laserCapture.lystatesVolume )
        .setValue('select[name="Downstream_use"]', laserCapture.downstreamUse )
        .pause(1000)

        .verify.attributeEquals('input[name="Sample_ID"]', "value", laserCapture.sampleId )
        .verify.attributeEquals('select[name="Core"]', "value", laserCapture.core )
        // .verify.attributeEquals('input[name="Completion_Date"]', "value", laserCapture.completionDate )
        .verify.attributeEquals('input[name="SlideNumber"]', "value", laserCapture.slideNumber )
        .verify.attributeEquals('input[name="Estimated_total_capture_area"]', "value", laserCapture.estimatedTotalCaptureArea )
        .verify.attributeEquals('input[name="Lysates"]', "value", laserCapture.lysates )
        .verify.attributeEquals('input[name="Lysates_Volume"]', "value", laserCapture.lystatesVolume )
        .verify.attributeEquals('select[name="Downstream_use"]', "value", laserCapture.downstreamUse )

        .verify.elementPresent('button[type="submit"]')
        .click('button[type="submit"]').pause(500);
  }

  return this;
};
