Template.tabsFour.helpers ({
	gotoProfile: function() {
		id = Meteor.userId();
		console.log('go to profile page', id);
		if (null === id ) {
			Router.go('tabs.four');
		}
		else {
			Router.go('/users/'+id);
		}
    	
	}
});    

Template.tabsFour.rendered = function () {
  	Session.set('tabTitle', 'SoFit - Profile');
};