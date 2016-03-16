


Router.route("/responses", {
  name:"questionnaireResponseListRoute",
  template:"questionnaireResponseList"
});

Template.questionnaireResponseList.helpers({
  response: function (){
    return QuestionnaireResponses.find({}, {sort: {authored: -1}});
  }
});

Template.questionnaireResponseList.events({
  "click #elementId": function (event, template){

  }
});
