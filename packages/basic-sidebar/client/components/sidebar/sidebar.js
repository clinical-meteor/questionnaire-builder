


Template.sidebar.rendered = function() {
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


Template.sidebar.events({
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

    if (Session.get("appWidth") < 1024) {
      Session.set('useHorizontalFences', false)
    }

  }
});

Template.sidebar.helpers({
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
  }
});
