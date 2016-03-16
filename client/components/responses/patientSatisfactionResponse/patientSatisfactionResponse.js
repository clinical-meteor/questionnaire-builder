Session.setDefault('counter', 0);


Router.route('/response/:id', {
  name: 'responseRoute',
  template: 'patientSatisfactionResponse',
  data: function(){
    return QuestionnaireResponses.findOne(this.params.id);
  },
  yieldTemplates: {
    'zedocHeader': {
      to: 'header'
    },
    'reactiveOverlaysTemplate': {
      to: 'overlays'
    },
    'keybindingsModal': {
      to: 'keybindingsModal'
    },
    'questionnaireResponseSidebar': {
      to: "westPanel"
    }
  },
  onAfterAction: function(){
    Session.set('secondPanelEnabled', true);
  }
});


Template.patientSatisfactionResponse.helpers({
  getCompletedPercentage: function(){
    if (this.completedCount && this.questionnaireCount) {
      return ((this.completedCount / this.questionnaireCount) * 100).toString().split(".")[0];
    } else {
      return "---";
    }
  },
  getChecked: function(parentContext){
    //console.log('this', this.toString());
    //console.log('options', parentContext.options);
    //console.log('indexOf', parentContext.options.indexOf(this.toString()));
    //console.log('answer', parentContext.answer[0].valueString);


    if (parentContext && parentContext.answer && parentContext.answer[0]) {
      if (parentContext.answer[0].valueString === this.toString()) {
        return "checked";
      }
    }

  },
  getLinkId: function(parentContext){
    return parentContext.linkId;
  },
  // currentQuestionnaire: function (){
  //   return Questionnaires.findOne();
  // },
  counter: function () {
    return Session.get('counter');
  }
});

Template.patientSatisfactionResponse.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set('counter', Session.get('counter') + 1);
  }
});
