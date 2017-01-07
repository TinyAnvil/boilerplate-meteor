if (Meteor.isDevelopment)
  process.env.MAIL_URL = 'smtp://username:password@smtp.sendgrid.net:587';

Meteor.startup(function() {

});
