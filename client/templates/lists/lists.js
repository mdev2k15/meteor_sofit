Template.lists.helpers({
  times: function () {
    var times = [];
    _(20).times(function(n){
      times.push(n);
    });
    return times;
  },

  sfContacts: function () {
      return SofitUsers.find({}, { sort: { lastName: -1} });
    },

  attachImgSrc: function () {
        var id = this.portrait;
        console.log(id);
        return SofitImg.findOne({_id: id});
    },
});

