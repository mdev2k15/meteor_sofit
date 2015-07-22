
Lmingposts = new Mongo.Collection("lmingposts");

Lmingposts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  body: {
    type: String,
    autoform: {
      rows: 6,
      'label-type': 'stacked'
    }
  },
}));

