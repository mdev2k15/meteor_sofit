AutoForm.hooks({
  'new-user': {
    onSuccess: function (operation, result, template) {
      console.log('sfUser saved successfully!');
      Router.go('tabs.three');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
  });