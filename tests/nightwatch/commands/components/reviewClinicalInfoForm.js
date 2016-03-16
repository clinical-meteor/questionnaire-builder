exports.command = function () {
  this
    .verify.elementPresent("form")

    .verify.elementPresent('input[name="Patient_ID"]')
    .verify.elementPresent('input[name="Sample_ID"]')

    .verify.elementPresent('select[name="biopsy_site"]')
    .verify.elementPresent('select[name="Enzalutamide"]')
    .verify.elementPresent('select[name="Abiraterone"]')
    .verify.elementPresent('select[name="site"]')

    .verify.elementPresent('input[name="age"]')
    .verify.elementPresent('input[name="AR_Amplification_by_FISH"]')
    .verify.elementPresent('input[name="Days_on_Study"]')
    .verify.elementPresent('input[name="On_Study_Date"]')
    .verify.elementPresent('input[name="Off_Study_Date"]')

    .verify.elementPresent('select[name="Reason_for_Stopping_Treatment"]')
    .verify.elementPresent('select[name="abi_psa_response"]')
    .verify.elementPresent('select[name="abi_radiographic_response"]')
    .verify.elementPresent('select[name="enza_psa_response"]')
    .verify.elementPresent('select[name="enza_radiographic_response"]')
    .verify.elementPresent('select[name="steroid_at_time_of_biopsy"]')
    .verify.elementPresent('select[name="sites_of_metastases_at_time_of_biopsy"]')

    .verify.elementPresent('input[name="when_where_stored"]')
    .verify.elementPresent('input[name="steroid_stop_date"]')
    .verify.elementPresent('input[name="psa_at_biopsy"]')
    .verify.elementPresent('input[name="ldh_at_biopsy"]')
    .verify.elementPresent('input[name="alk_phos_at_biopsy"]')
    .verify.elementPresent('input[name="hemoglobin_at_biopsy"]')
    .verify.elementPresent('input[name="chga_at_biopsy"]')
    .verify.elementPresent('input[name="nse_at_biopsy"]')
    .verify.elementPresent('input[name="ecog_ps_at_biopsy"]')
    .verify.elementPresent('input[name="psa_nadir_on_padt"]')

    .verify.elementPresent('select[name="gleason_grade"]')
    .verify.elementPresent('select[name="orchiectomy"]')
    .verify.elementPresent('select[name="treatment_for_mcrpc_prior_to_biopsy"]')
    .verify.elementPresent('select[name="post-biopsy_treatment"]')
    .verify.elementPresent('select[name="psa_response"]')
    .verify.elementPresent('select[name="radiographic_response"]')
    .verify.elementPresent('select[name="death_or_last_contact"]')

    .verify.elementPresent('button[type="submit"]');

  return this;
};
