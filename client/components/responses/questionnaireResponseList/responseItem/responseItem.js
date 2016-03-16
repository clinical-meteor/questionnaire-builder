

Template.responseItem.helpers({
  getAuthoredDateTime: function (){
    return moment(this.authored).format("MMMM Do YYYY, h:mm:ss a");
  }
});

Template.responseItem.events({
  "click .responseItem": function (event, template){
    Router.go('/response/' + this._id);
  }
});
