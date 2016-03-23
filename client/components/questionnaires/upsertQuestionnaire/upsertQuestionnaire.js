
Session.setDefault('counter', 0);

//------------------------------------------------------------------------------
// ROUTING

Router.route( '/view/questionnaire/:id', {
  name: 'upsertQuestionnaire',
  template: 'upsertQuestionnaire',
  data: function () {
    Session.set('selectedQuestionnaireId', this.params.id);
    return Questionnaires.findOne({_id: this.params.id});
  },
  yieldTemplates: {
    'navbarHeader': {
      to: 'header'
    },
    'questionnaireActionButtons': {
      to: "footer"
    }
  }
});


//------------------------------------------------------------------------------
// COMPONENT

Template.upsertQuestionnaire.helpers({
  getLinkId: function(parentContext){
    return parentContext.linkId;
  },
  currentQuestionnaire: function (){
    return Questionnaires.findOne();
  }
});

Template.upsertQuestionnaire.events({
  'click .answerSet': function (event, template) {
    var currentId = event.currentTarget.id.split("-")[1];
    var nextId = parseInt(currentId) + 1;
    console.log('nextId', nextId);

    $('html, body').animate({
      scrollTop: $("#answerSet-" + nextId).offset().top - 80
    }, 500);
  }
});
