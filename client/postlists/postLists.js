Template.postLists.helpers({

  lmingposts: function () {
      return Lmingposts.find({}, { sort: { title: 1 } });
    },

   attachImgSrc: function () {
        var id = this.picture;
        console.log(id);
        return Images.findOne({_id: id});
    },
});
