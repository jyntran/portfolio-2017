import React, { Component } from 'react';

export default class SocialSection extends Component {
	render() {
		const githubURL = Meteor.settings.public.github;
		const linkedinURL = Meteor.settings.public.linkedin;
		const twitterURL = Meteor.settings.public.twitter;
		const facebookURL = Meteor.settings.public.facebook;

		return (
			<div className="social">
				<a href={githubURL} title="GitHub">
					<i className="fa fa-github" aria-hidden="true"></i>
				</a>
				<a href={linkedinURL} title="LinkedIn">
					<i className="fa fa-linkedin" aria-hidden="true"></i>
				</a>
				<a href={twitterURL} title="Twitter">
					<i className="fa fa-twitter" aria-hidden="true"></i>
				</a>
				<a href={facebookURL} title="Facebook">
					<i className="fa fa-facebook" aria-hidden="true"></i>
				</a>
			</div>
		);
	}
}