


Template.questionnaireSidebar.rendered = function() {
  this.find('#sidebarMenuContents a')._uihooks = {
    insertElement: function(node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        this.remove();
      });
    }
  };
};


Template.questionnaireSidebar.events({
  "click #usernameLink": function(){
    if (!Meteor.user()) {
      Router.go('/entrySignIn');
    }
  },
  "click #protocolLibraryLink": function (){
     Router.go('/protocols');
  },
  'click #logoutButton': function() {
    Meteor.logout(function(){
      Router.go('/entrySignIn')
    });


    // if we are on a private list, we'll need to go to a public one
    var current = Router.current();
    if (current.route.name === 'checklistPage' && current.data().userId) {
      Router.go('checklistPage', Lists.findOne({userId: {$exists: false}}));
    }
    if (Session.get("appWidth") < 1024) {
      Session.set('useHorizontalFences', false)
    }

  },
  'click #newListButton': function() {
    Router.go('checklistPage', Lists.createNew());
  }
});

Template.questionnaireSidebar.helpers({
  getUsername: function () {
    if (Meteor.user()) {
      if (Meteor.user().emails[0]) {
        return Meteor.user().emails[0].address;
      } else {
        return "---";
      }
    } else {
      return "Sign In";
    }
  },
  getConnectionStatus: function () {
    return Meteor.status().status;
  },
  email: function() {
    return Meteor.user().emails[0].address;
  },
  questionnaires: function() {
    return Questionnaires.find();
  },
  activeListClass: function() {
    var current = Router.current();
    if (current.route.name === 'checklistPage' && current.params._id === this._id) {
      return 'active';
    }
  }
});
