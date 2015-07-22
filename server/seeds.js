Meteor.startup(function () {

  // if (Posts.find({}).count() === 0) {
  //   Posts.insert({
  //     title: Fake.sentence(),
  //     body: Fake.paragraph(),
  //     published: Fake.fromArray([true, false])
  //   });
  // }
if (sofit_users.find({}).count() === 0) {
    // _(posts).each(function (stock) {
      // sofit_users.insert({
      //   title: 'Title1',
      //   authorID: 123,
      //   desc: "this is a desc",
      // });
    // });
  }

if (sofit_msgs.find({}).count() === 0) {
    // _(posts).each(function (stock) {
      // sofit_users.insert({
      //   title: 'Title1',
      //   authorID: 123,
      //   desc: "this is a desc",
      // });
    // });
  }

if (sofit_posts.find({}).count() === 0) {
// _(posts).each(function (stock) {
  // sofit_users.insert({
  //   title: 'Title1',
  //   authorID: 123,
  //   desc: "this is a desc",
  // });
// });
}

});
