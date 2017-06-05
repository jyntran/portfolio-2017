import React, { Component } from 'react';

import URLs from './URLs.jsx';

export default class SocialSection extends Component {
	render() {
	return (
		<div className="social">
			<a href={URLs.github} title="GitHub">
				<i className="fa fa-github" aria-hidden="true"></i>
			</a>
			<a href={URLs.linkedin} title="LinkedIn">
				<i className="fa fa-linkedin" aria-hidden="true"></i>
			</a>
			<a href={URLs.twitter} title="Twitter">
				<i className="fa fa-twitter" aria-hidden="true"></i>
			</a>
			<a href={URLs.facebook} title="Facebook">
				<i className="fa fa-facebook" aria-hidden="true"></i>
			</a>
		</div>
	);
	}
}