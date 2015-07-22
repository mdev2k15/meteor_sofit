AutoForm.hooks({
  'edit-newPost': {
    onSuccess: function (operation, result, template) {
      alert('Post saved successfully!');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
