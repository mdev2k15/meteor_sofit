Template.tabsThree.helpers ({
    gotoLogin: function () {
    	// console.log('go to login page');
    	Router.go('tabs.four')
    }

});    

Template.tabsThree.rendered = function () {
  	// console.log('tab3 is rendered');
  	// console.log('set tabTitle');
  	Session.set('tabTitle', 'SoFit - Contacts');
};