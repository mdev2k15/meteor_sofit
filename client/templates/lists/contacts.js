Template.contacts.helpers({

  // sfContacts: function () {
  //     return SofitUsers.find({}, { sort: { lastName: -1} });
  //   },

  attachImgSrc: function () {
        var id = this.portrait;
        console.log(id);
        return SofitImg.findOne({_id: id});
    },
});

Template.contacts.onRendered( function () {
  console.log(sfContacts);
});
