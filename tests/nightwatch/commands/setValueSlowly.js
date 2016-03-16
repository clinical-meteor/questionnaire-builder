exports.command = function(domElement, searchTerm, pauseMilliseconds) {
  if (!pauseMilliseconds) {
    pauseMilliseconds = 50;
  }
  for (var i = 0, len = searchTerm.length; i < len; i++) {
    this.setValue(domElement, searchTerm[i]).pause(pauseMilliseconds);
  }
  return this;
};
