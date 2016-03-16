Session.setDefault( 'questionnaireSearchFilter', '' );
Session.setDefault( 'tableLimit', 20 );
Session.setDefault( 'paginationCount', 1 );
Session.setDefault( 'selectedPagination', 0 );
Session.setDefault( 'skipCount', 0 );



//------------------------------------------------------------------------------
// ROUTING

Router.map( function () {
  this.route( 'questionnairesListPage', {
    path: '/list/questionnaires/',
    template: 'questionnairesListPage',
    data: function () {
      return Campaigns.find();
    }
  } );
} );


//------------------------------------------------------------------------------
// TEMPLATE INPUTS

Template.questionnairesListPage.events( {
  'click .addRecordIcon': function () {
    Router.go( '/insert/questionnaire' );
  },
  'click .questionnaireItem': function () {
    Router.go( '/view/questionnaire/' + this._id );
  },
  // use keyup to implement dynamic filtering
  // keyup is preferred to keypress because of end-of-line issues
  'keyup #questionnaireSearchInput': function () {
    Session.set( 'questionnaireSearchFilter', $( '#questionnaireSearchInput' ).val() );
  }
} );


//------------------------------------------------------------------------------
// TEMPLATE OUTPUTS


var OFFSCREEN_CLASS = 'off-screen';
var EVENTS = 'webkitTransitionEnd oTransitionEnd transitionEnd msTransitionEnd transitionend';

Template.questionnairesListPage.rendered = function () {
  console.log( 'trying to update layout...' );

  Template.appLayout.delayedLayout( 20 );
};


Template.questionnairesListPage.helpers( {
  hasNoContent: function () {
    if ( Campaigns.find()
      .count() === 0 ) {
      return true;
    } else {
      return false;
    }
  },
  questionnairesList: function () {
    Session.set( 'receivedData', new Date() );

    Template.appLayout.delayedLayout( 20 );

    return Campaigns.find( {
      'profile.fullName': {
        $regex: Session.get( 'questionnaireSearchFilter' ),
        $options: 'i'
      }
    } );
  }
} );
