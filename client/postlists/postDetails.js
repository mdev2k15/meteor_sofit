
  Template.postDetails.helpers({
    attachImgSrc: function () {
        var id = this.picture;
        console.log(id);
        return Images.findOne({_id: id});
    },
  });
