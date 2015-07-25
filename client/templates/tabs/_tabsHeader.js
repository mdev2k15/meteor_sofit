Template._tabsHeader.helpers ({
    curTabTitle: function () {
    	return Session.get('tabTitle');
    },

    isVisitor: function () {
    	return (null === Meteor.userId());
    }

});  

Template._tabsHeader.rendered = function () {
  console.log('header is rendered');
};
