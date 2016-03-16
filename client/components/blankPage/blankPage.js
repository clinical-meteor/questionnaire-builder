
Router.route('/blank', {
  name: 'blankPageRoute',
  template: 'blankPage',
  yieldTemplates: {
    'sidebar': {
      to: "westPanel"
    }
  }
});

Template.blankPage.helpers({

});

Template.blankPage.events({

});
