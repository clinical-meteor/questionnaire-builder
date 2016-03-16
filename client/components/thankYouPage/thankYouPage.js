

Router.route("/thankyou", {
  name:"thankYouPageRoute",
  template:"thankYouPage"
});

Template.thankYouPage.helpers({
  rendered: function (){

  }
});

Template.thankYouPage.events({
  "click #thankYouMessage": function (event, template){
    Router.go('/responses');
  }
});
