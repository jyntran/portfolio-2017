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
					<i className="icon-github" aria-hidden="true"></i>
				</a>
				<a href={linkedinURL} title="LinkedIn">
					<i className="icon-linkedin" aria-hidden="true"></i>
				</a>
				<a href={twitterURL} title="Twitter">
					<i className="icon-twitter" aria-hidden="true"></i>
				</a>
				<a href={facebookURL} title="Facebook">
					<i className="icon-facebook" aria-hidden="true"></i>
				</a>
			</div>
		);
	}
}