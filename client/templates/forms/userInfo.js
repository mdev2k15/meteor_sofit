Template.userInfo.onRendered(function () {
   console.log(this);
 });

Template.userInfo.helpers({
	attachImgSrc: function () {
	    var id = this.picture;
	    // console.log(this);
	    return Images.findOne({_id: id});
	},

	isUserInfoEdit: function () {
		return Session.get('userInfoEdit');
	},

	displayName: function () {
		// console.log('displayName:', this);
		if (undefined != this.profile.firstName ) {
			if (undefined != this.profile.lastName) {
				return this.profile.firstName + ' ' + this.profile.lastName;
			}
			return this.profile.firstName;
		}
		return this.username;
	},
});

Template.layout.events({
  'click [data-action=editUserInfo]': function (event, template) {
   // var id = Router.current().params.id;
   // console.log("Click", id);
   // Router.go('postDetails', {_id: id});
   	Session.set('userInfoEdit', true);
  }
});

Template.userInfo.events({
  'click [data-action=logout]': function () {
    AccountsTemplates.logout();
  }
});

AutoForm.hooks({
  'editCurUserInfo': {
    onSuccess: function (operation, result, template) {
      console.log('UserInfo updated successfully!');
      // console.log(operation);
      // console.log(result);
      // console.log(template);
      Session.set('userInfoEdit', false);
    },

    onError: function(operation, error, template) {
      console.log(error);
      Session.set('userInfoEdit', false);
    },
  }
});