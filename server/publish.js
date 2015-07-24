Meteor.publish("allposts", function() {
  return Lmingposts.find();
});

Meteor.publish("onepost", function(id) {
  return Lmingposts.find({_id:id});
});

Meteor.publish("images", function() {
  return Images.find();
});

// // Server
// Meteor.publishComposite('topTenPosts', {
//     find: function() {
//         // Find top ten highest scoring posts
//         return Posts.find({}, { sort: { score: -1 }, limit: 10 });
//     },
//     children: [
//         {
//             find: function(post) {
//                 // Find post author. Even though we only want to return
//                 // one record here, we use "find" instead of "findOne"
//                 // since this function should return a cursor.
//                 return Meteor.users.find(
//                     { _id: post.authorId },
//                     { limit: 1, fields: { profile: 1 } });
//             }
//         },
//         {
//             find: function(post) {
//                 // Find top two comments on post
//                 return Comments.find(
//                     { postId: post._id },
//                     { sort: { score: -1 }, limit: 2 });
//             },
//             children: [
//                 {
//                     find: function(comment, post) {
//                         // Find user that authored comment.
//                         return Meteor.users.find(
//                             { _id: comment.authorId },
//                             { limit: 1, fields: { profile: 1 } });
//                     }
//                 }
//             ]
//         }
//     ]
// });