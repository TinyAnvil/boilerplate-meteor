Alert = new ReactiveVar(false);

Template.registerHelper('isDevelopment', function() {
  return Meteor.isDevelopment;
});

Template.registerHelper('Alert', function() {
  var alert = Alert.get();
  var timer;

  Meteor.clearTimeout(timer);

  if (alert && alert.timeout !== false) {
    timer = Meteor.setTimeout(function() {
      alert = Alert.set(false);
    }, alert.timeout || 3000);
  }

  if (alert === false) {
    $('.alert-box').slideUp(250);
  } else {
    $('.alert-box').slideDown(250);
  }

  return Alert.get();
});
