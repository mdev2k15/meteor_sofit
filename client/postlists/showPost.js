
  Template.showPost.helpers({
    attachImgSrc: function () {
        var id = this.picture;
        console.log(id);
        return Images.findOne({_id: id});
    },
  });

Template.showPost.events({
  'click [data-action=editPost]': function () {
   Router.go('postDetailss', {_id: this._id});
  }
});

Template.showPost.onRendered(function () {
	console.log(this);
});