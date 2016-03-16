Package.describe({
  name: 'clinical:sidebar',
  version: '0.0.1',
  summary: 'Basic sidebar for ClinicalFramework apps.',
  git: 'http://github.com/clinical-meteor/sidebar',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('meteor-platform');
  api.use('less');

  api.addFiles('client/components/sidebar/sidebar.html', 'client');
  api.addFiles('client/components/sidebar/sidebar.js', 'client');
  api.addFiles('client/components/sidebar/sidebar.less', 'client');

  api.addFiles('lib/sidebar.js');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('clinical:sidebar');
});
