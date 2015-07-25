
  Template.showPost.onRendered(function () {
  	 console.log('record postTitle', this, Session.get('tabTitle'));
     if (typeof(this.data.readPost) != 'undefined') {
        Session.set('tabTitle', this.data.readPost.title);
     }
	   
  });

  Template.showPost.events({
  'click [data-action=editPost]': function (event, template) {
   var id = Router.current().params.id;
   console.log("Click:", id);
   // Router.go('postDetails', {_id: id});
    Session.set('postEditMode', true);
  }
});

Template.layout.helpers ({
    postTitle: function () {
    	console.log('set postTitle to page header');
    	return Session.get('postTitle');
    },

    isVisitor: function () {
      console.log('check visitor');
      return (null === Meteor.userId());
    },
});

  Template.showPost.helpers({
    attachImgSrc: function () {
        var id = this.picture;
        // console.log(this);
        return Images.findOne({_id: id});
    },
    isEditMode: function () {
    	return Session.get('postEditMode');
    },
  });

Template.layout.events({
  'click [data-action=editPost]': function (event, template) {
   var id = Router.current().params.id;
   console.log("Click: ", id);
   // Router.go('postDetails', {_id: id});
   	Session.set('postEditMode', true);
  }
});

AutoForm.hooks({
  'editCurPost': {
    onSuccess: function (operation, result, template) {
      console.log('Post inserted successfully!');
      // console.log(operation);
      // console.log(result);
      // console.log(template);
      Session.set('postEditMode', false);
    },

    onError: function(operation, error, template) {
      console.log(error);
      Session.set('postEditMode', false);
    },
  }
});
      
