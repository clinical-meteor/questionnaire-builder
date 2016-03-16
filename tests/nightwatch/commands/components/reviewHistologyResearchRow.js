    /*var histologyResearchRecord = {
      sampleId: "",
      mutatedGenes: "",
      immunohistochemistry: "",
      histologyCall: "",
      adeno: "",
      smallCell: "",
      trichotomy: ""
    }*/


exports.command = function(histologyResearchRecord, rowIndex) {
  this
    .verify.elementPresent("table tbody tr")
    .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ")")

    if(histologyResearchRecord){
      this
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Sample_ID")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Histology_Call")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Adeno")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Small_Cell")
      .verify.elementPresent("table tbody tr:nth-child(" + rowIndex + ") .Trichotomy")

      //.verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Sample_ID", histologyResearchRecord.sampleId )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Histology_Call", histologyResearchRecord.histologyCall )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Adeno", histologyResearchRecord.adeno )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Small_Cell", histologyResearchRecord.smallCell )
      .verify.containsText("table tbody tr:nth-child(" + rowIndex + ") .Trichotomy", histologyResearchRecord.trichotomy )

      .verify.elementPresent('button[type="submit"]')
      .click('button[type="submit"]').pause(500)
    }


  return this;
};
