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

Template.tabsOne.rendered = function () {
  	Session.set('tabTitle', 'SoFit - Posts');
};
