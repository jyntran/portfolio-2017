import '../imports/api/projects.js';
import '../imports/api/companies.js';

import { Email } from 'meteor/email';

Meteor.startup(function() {
	process.env.MAIL_URL='smtp://DOMAIN:PASSWORD@smtp.mailgun.org:587';
});

if (Meteor.isServer) {
	Meteor.methods({
		sendEmail: function(formData) {
			console.log('Meteor sendEmail');
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
		}
	})
}