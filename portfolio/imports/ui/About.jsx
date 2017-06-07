import React, { Component } from 'react';

export default class AboutSection extends Component {
	render() {
		const resumeURL = Meteor.settings.public.resume;
		return (
			<div className="row align-center">
				<div className="col col-8">
					<h2>About</h2>
					<p>Hello, I'm Jen.</p>
					<p>I'm a software developer and test engineer based in Waterloo, Canada.</p>
					<p>I have a wide range of web development skills, from front-end (ReactJS, AngularJS), to back-end (NodeJS, ExpressJS).</p>
					<p>I've also worked in C, C++, Python, as well as MySQL and PHP.</p>
					<p>Most of all, I'm an eager learner and can adapt to any work environment.</p>
					<p><a href={resumeURL}>Download my resume here.</a></p>
				</div>
			</div>
		);
	}
}