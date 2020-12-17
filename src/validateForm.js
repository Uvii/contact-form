export default function validateForm(values) {
  let errors = {};

  // User name validation
  if (!values.fullName.trim()) {
    errors.userName = 'User Name required'
  }

  // eMail validation
  if (!values.mailID) {
    errors.email = 'Email required';
  } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.mailID)) {
    errors.email = 'Email address is invalid';
  }

  // mobileNumer
  if (!values.mobileNumber) {
    errors.phNumb = 'Phone number is required'
  } else if (values.mobileNumber.length !== 10 ) {
    console.log('values.mobileNumber.length', values.mobileNumber.length)
    errors.phNumb = 'Enter a valid mobile Number'
  }

  // comments 
  if (!values.userComments) {
    errors.comment = 'Comments required !'
  } else if (values.userComments.length < 10) {
    errors.comment = 'Minimum 10 characters to be added'
  }

  return errors;
};