exports.command = function() {
  this
    .verify.elementPresent("table")
    .verify.elementPresent("table thead")
    .verify.elementPresent("table thead tr")

    .verify.elementPresent("table thead tr .Sample_ID")
    /*.verify.elementPresent("table thead tr .Mutated_Genes")
    .verify.elementPresent("table thead tr .Immunohistochemistry_Upregulated_Genes")*/
    .verify.elementPresent("table thead tr .Histology_Call")
    .verify.elementPresent("table thead tr .Adeno")
    .verify.elementPresent("table thead tr .Small_Cell")
    .verify.elementPresent("table thead tr .Trichotomy")

  return this;
};
