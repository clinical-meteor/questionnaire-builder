exports.command = function () {
  this
    .sectionBreak('.reviewHistologyResearchForm()')
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Sample_ID"]')

    /*.verify.elementPresent('input[prop="Mutated_Genes"]')
    .verify.elementPresent('input[prop="Immunohistochemistry_Upregulated_Genes"]')*/
    .verify.elementPresent('select[name="Histology_Call"]')
    .verify.elementPresent('input[name="Adeno"]')
    .verify.elementPresent('input[name="Small_Cell"]')
    .verify.elementPresent('input[name="Trichotomy"]')

    .verify.elementPresent('button[type="submit"]');

  return this;
};
