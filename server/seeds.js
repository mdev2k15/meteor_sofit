Meteor.startup(function () {

  // if (Posts.find({}).count() === 0) {
  //   Posts.insert({
  //     title: Fake.sentence(),
  //     body: Fake.paragraph(),
  //     published: Fake.fromArray([true, false])
  //   });
  // }
if (SofitUsers.find({}).count() === 0) {
    // _(posts).each(function (stock) {
      // sofit_users.insert({
      //   title: 'Title1',
      //   authorID: 123,
      //   desc: "this is a desc",
      // });
    // });
  }

if (SofitMsgs.find({}).count() === 0) {
    // _(posts).each(function (stock) {
      // sofit_users.insert({
      //   title: 'Title1',
      //   authorID: 123,
      //   desc: "this is a desc",
      // });
    // });
  }

if (SofitPosts.find({}).count() === 0) {
// _(posts).each(function (stock) {
  // sofit_users.insert({
  //   title: 'Title1',
  //   authorID: 123,
  //   desc: "this is a desc",
  // });
// });
}

});
