
Router.route('/', {
  name: 'homeRoute',
  template: 'homePage',
  yieldTemplates: {
    'sidebar': {
      to: "westPanel"
    }
  }
});


// counter starts at 0
Session.setDefault('counter', 0);

Template.homePage.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.homePage.events({
  'click #counterButton': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);

    // log an event to the audit log
    HipaaLogger.logEvent("modify", Meteor.userId(), Meteor.user().profile.fullName, "Button", null, null, null, null);
  },
  'click #navbarToggle': function () {
    Session.toggle('showNavbars');
  },
  'click #fullscreenToggle': function () {
    Session.toggle('useHorizontalFences');
    Session.toggle('wideCard');
    Session.toggle('navIsFullscreen');
  }
});
