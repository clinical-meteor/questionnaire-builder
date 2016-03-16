    /*var histologyAssessmentRecord = {
      sampleId: "",
      core: "",
      blockImage: "",
      referenceSlideNumber: "",
      referenceSlideImages: "",
      blockStatus: ""
    }
    */
exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Sample_ID")
    .verify.elementPresent("table thead tr .Cores")


  return this;
};
