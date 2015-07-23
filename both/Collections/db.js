
SofitImg = new FS.Collection("SofitImg", {
  stores: [new FS.Store.GridFS("SofitImg", {})]
});

SofitUsers = new Mongo.Collection("SofitUsers");
SofitUsers.attachSchema(new SimpleSchema({
  firstName: {
    type: String,
    max: 50,
    autoform: {
      'label-type': 'stacked'
    }
  },
  lastName: {
    type: String,
    max: 50,
    autoform: {
      'label-type': 'stacked'
    }
  },

  gender: {
    type: String,
    optional: true,
    autoform: {
      type: "select-radio-inline",
      options: function () {
        return [
          {label: "Male", value: 'Male'},
          {label: "Female", value: 'Female'},
        ];
      }
    }
  },
  email: {
    type: String,
    max: 100,
    autoform: {
      afFieldInput: {
        type: "email"
      }
    }
  },
  selfIntro: {
    type: String,
    max: 200,
    optional: true,
    autoform: {
    	afFieldInput: {
        	type: "textarea"
      	}
    }
  },

   portrait: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'SofitImg',
        label: 'Choose file'
      }
    }
  },
}));

SofitMsgs = new Mongo.Collection("SofitMsgs");

SofitMsgs.attachSchema(new SimpleSchema({
  sender: {
    type: Number,
    autoform: {
      afFieldInput: {
        type: "number"
      }
    }
  },
  recvr: {
    type: Number,
    autoform: {
      afFieldInput: {
        type: "number"
      }
    }
  },
  msg: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "text"
      }
    }
  },
}));

SofitPosts = new Mongo.Collection("SofitPosts");

SofitPosts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'SofitImg',
        label: 'Choose file'
      }
    }
  },

  desc: {
    type: String,
    max: 500,
    optional: true,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  location: {
    type: String,
    max: 200,
    autoform: {
      'label-type': 'stacked'
    }
  },
  actionType: {
    type: String,
    max: 10,
    optional: true,
    autoform: {
      'label-type': 'stacked'
    }
  },
  published: {
    type: Boolean,
    defaultValue: true,
    optional: true,
    autoform: {
      type: 'toggle'
    }
  }
}));


