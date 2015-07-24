Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  this.route('tabs.one', {
      layoutTemplate: 'tabsLayout',
      path: '/tabs/one', // layoutTemplate: 'tabsLayout',
      waitOn: function () {
        // return one handle, a function, or an array
        
          Meteor.subscribe('images');
          Meteor.subscribe('allposts');

          return [];
      },
      data: function () {
        return {
          postLists: Lmingposts.find()
        };
      },
      action: function () {
        this.render('tabsOne');
      }
    });

  this.route('/', {
    layoutTemplate: 'tabsLayout',
    waitOn: function () {
      // return one handle, a function, or an array
      
        Meteor.subscribe('images');
        Meteor.subscribe('allposts');

        return [];
    },
    data: function () {
      return {
        postLists: Lmingposts.find()
      };
    },
    action: function () {
      this.render('tabsOne');
    }
  });

  // this.route('sfNewUser', {path: '/'});
  this.route('actionSheet');
  this.route('backdrop');
  this.route('forms', {
    data: function () {
      return {
        post: Posts.find().fetch()[0]
      };
    }
  });
  this.route('headersFooters');
  this.route('lists');
  this.route('newPost');
  this.route('loading');
  this.route('modal');
  this.route('navigation');
  this.route('navigation.one', {path: '/navigation/one'});
  this.route('navigation.two', {path: '/navigation/two'});
  this.route('navigation.three', {path: '/navigation/three'});
  this.route('popover');
  this.route('popup');
  this.route('sideMenu');
  this.route('slideBox');
  // this.route('tabs.one', {path: '/tabs/one', layoutTemplate: 'tabsLayout'});
  this.route('tabs.two', {path: '/tabs/two', layoutTemplate: 'tabsLayout'});
  this.route('tabs.three', {path: '/tabs/three', layoutTemplate: 'tabsLayout'});
  this.route('tabs.four', {path: '/tabs/four', layoutTemplate: 'tabsLayout'});
  this.route('userAccounts');

  this.route('sfNewpost');
  this.route('sfNewUser');
  this.route('userLogin');

  this.route('/users/:_id', {
    name: 'userInfo',
    data: function() { return SofitUsers.findOne(this.params._id); },
    //layoutTemplate: 'tabsLayout'
});

  Router.route('/dposts/:_id', {
    name: 'postDetails',
    waitOn: function () {
      // return one handle, a function, or an array
      
        Meteor.subscribe('images');
        Meteor.subscribe('onepost', this.params._id);

        return [];
    },
    data: function () {
      return {
        writePost: Lmingposts.findOne(this.params._id)
      };
    },
    // action: function () {
    //   this.render('postDetails');
    // }
  });

  Router.route('/sposts/:_id', {
    name: 'showPost',
    waitOn: function () {
      // return one handle, a function, or an array
      
        Meteor.subscribe('images');
        Meteor.subscribe('onepost', this.params._id);

        return [];
    },
    data: function () {
      return {
        readPost: Lmingposts.findOne(this.params._id)
      };
    },
    action: function () {
      this.render('showPost');
    }
  });

});
