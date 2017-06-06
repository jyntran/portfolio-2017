import '../imports/api/projects.js';

import { Email } from 'meteor/email';

Meteor.startup(function() {
	if (Meteor.settings) {
		process.env.MAIL_URL = Meteor.settings.private.mailgun.mail_url;
	} else {
		console.log('WARNING: no settings file found');
	}
});

if (Meteor.isServer) {
	Meteor.methods({
		sendEmail: function(formData) {
			console.log('Meteor sendEmail');

			// make sure all aruments are strings
			check([formData.name, formData.email, formData.message], [String]);

			// check honeypot
			if (formData.beemail) {
				console.log('sendEmail failed due to honeypot');
				return;
			}

			// replace line breaks for html
			var htmlMessage = formData.message;
			htmlMessage = htmlMessage.replace(/(?:\r\n|\r|\n)/g, '<br />');
			Email.send({
				to: "jyntran@gmail.com",
				from: formData.email,
				subject: "[jyntran.ca] Contact",
				html: "<p><b>Message from " + formData.name + " (" + formData.email + "):</b></p><p>" + htmlMessage + "</p>",
				text: "Message from " + formData.name + " (" + formData.email + "):\n\n" + formData.message
			});
			console.log('sendEmail success');

			return true;
		}
	})
}