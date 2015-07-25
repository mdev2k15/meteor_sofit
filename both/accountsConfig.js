
AccountsTemplates.configure({
  negativeValidation: false,
  negativeFeedback: false,
  positiveValidation: false,
  positiveFeedback: false,
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');


AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "LoginName",
    required: true,
    minLength: 2,
    errStr: 'must be longer than 2 letters'
  },

  {
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "Email",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Wrong email format',
  },

	{
    _id: "firstName",
    type: "text",
    displayName: "First Name",
    minLength: 2,
    errStr: 'must be longer than 2 letters'
  },

  {
    _id: "lastName",
    type: "text",
    displayName: "Last Name",
    minLength: 2,
    errStr: 'must be longer than 2 letters'
  },

  {
    _id: 'phone',
    type: 'tel',
    displayName: "Phone",
    errStr: 'Wrong phone format',
  },

  {
	_id: "gender",
    type: "radio",
    displayName: "Gender",
    required: true,
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
    ],
  },

  {
    _id: "location",
    type: "text",
    displayName: "Location",
    minLength: 5,
    errStr: 'must be longer than 5 letters'
  },

  {
    _id: 'password',
    type: 'password',
    displayName: "Password",
    required: true,
    minLength: 6,
    errStr: 'must be longer than 6 characters',
  },

  {
    _id: 'username_and_email',
    type: 'text',
    required: true,
    displayName: "User Login",
  },

]);
