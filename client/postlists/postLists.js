Template.postLists.helpers({

  lmingposts: function () {
      return Lmingposts.find({}, { sort: { title: 1 } });
    },
});
