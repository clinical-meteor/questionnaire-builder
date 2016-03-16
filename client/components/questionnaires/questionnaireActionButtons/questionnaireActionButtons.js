



Template.questionnaireActionButtons.events({
  'click #saveDataButton': function (){

    // create a basic response object from the questionnaire
    var questionnaire = Questionnaires.findOne({identifier: "patientFeedbackQuestionnaire"});
    //console.log('Questionnaire', questionnaires[0]);

    var response = questionnaire;

    // edit the necessary base fields to make it a response object
    response.questionnaire = response.identifier;
    response.status = "completed";
    response.authored = new Date();

    delete response._id;
    delete response.version;
    delete response.publisher;
    delete response.telecom;
    delete response.subjectType;
    delete response.date;
    delete response.identifier;

    var completedCount = 0;
    var questionnaireCount = 0;

    // for each question in the questionnaire
    for (var i = 0; i < response.group.group.length; i++) {
      // console.log('response.group.group', response.group.group);
      for (var j = 0; j < response.group.group[i].question.length; j++) {
        //console.log('response.group.group[i].question', response.group.group[i].question[j].linkId);

        questionnaireCount++;

        // find the selected answer from the dom
        var multipleChoiceAnswer = $("input[name=question-" + response.group.group[i].question[j].linkId + "]:checked").val();
        if (multipleChoiceAnswer) {
          //console.log('multipleChoiceAnswer', multipleChoiceAnswer);

          completedCount++;

          // and write an answer into the response object
          response.group.group[i].question[j].answer = [{
            valueString: multipleChoiceAnswer
          }];

          //delete response.group.group[i].question[j].options;
        }

        // clean up unneeded keys while we're here
        delete response.group.group[i].question[j].concept;
        delete response.group.group[i].question[j].type;
        delete response.group.group[i].question[j].required;
        delete response.group.group[i].question[j].repeats;

      }
    }

    response.completedCount = completedCount;
    response.questionnaireCount = questionnaireCount;

    console.log('Received new response', response);

    QuestionnaireResponses.insert(response);

    if (Session.get('campaignId') && Session.get('patientId')) {
      var campign = Campaigns.findOne({_id: Session.get('campaignId')});
      var updatedCampaignPatients = [];
      campign.patients.forEach(function(patient){
        if (patient._id === Session.get('patientId')) {
          patient.completed = true;
        }
        updatedCampaignPatients.push(patient);
      });

      Campaigns.update({_id: Session.get('campaignId')}, {$set:{
        patients: updatedCampaignPatients
      }});

    }

    Router.go('/thankyou');
  }
});
