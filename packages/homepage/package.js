Package.describe({
  name: 'clinical:homepage',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');

  api.use('meteor-platform');
  api.use('session');
  api.use('clinical:router');
  api.use('less');

  api.addFiles('client/components/homePage/homePage.html', 'client');
  api.addFiles('client/components/homePage/homePage.js', 'client');
  api.addFiles('client/components/homePage/homePage.less', 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:homepage');
});
