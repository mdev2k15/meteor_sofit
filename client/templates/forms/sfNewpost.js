AutoForm.hooks({
  'new-form2': {
    onSuccess: function (operation, result, template) {
      alert('sf_Post saved successfully!');
      Router.go('tabs.two');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
  });