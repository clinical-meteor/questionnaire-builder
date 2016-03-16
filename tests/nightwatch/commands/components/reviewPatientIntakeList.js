exports.command = function () {
  this
    .verify.elementPresent('#recordUpsertPage');

  return this;
};
