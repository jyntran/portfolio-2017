Meteor.startup(function() {
	process.env.MAIL_URL='smtp://DOMAIN:PASSWORD@smtp.mailgun.org:587';
});