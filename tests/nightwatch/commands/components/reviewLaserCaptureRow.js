    /*var laserCaptureRecord = {
      sampleId: "",
      core: "",
      completionDate: "",
      slideNumber: "",
      estimatedTotalCaptureArea: "",
      lysates: "",
      lystatesVolume: "",
      downstreamUse: ""
    }*/

exports.command = function(laserCaptureRecord, rowIndex) {
  this
    .verify.elementPresent("table tbody tr")
    .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ")")

    if(laserCaptureRecord){
      this
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Sample_ID")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Core")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Completion_Date")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .SlideNumber")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Estimated_total_capture_area")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Lysates")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Lysates_Volume")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Downstream_use")

      //.verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Sample_ID", laserCaptureRecord.sampleId )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Core", laserCaptureRecord.core )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Completion_Date", laserCaptureRecord.completionDate )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .SlideNumber", laserCaptureRecord.slideNumber )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Estimated_total_capture_area", laserCaptureRecord.estimatedTotalCaptureArea )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Lysates", laserCaptureRecord.lysates )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Lysates_Volume", laserCaptureRecord.lystatesVolume )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Downstream_use", laserCaptureRecord.downstreamUse )
    }


  return this;
};
