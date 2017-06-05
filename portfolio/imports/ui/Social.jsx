import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import URLs from './URLs.jsx';

export default class SocialSection extends Component {
	render() {
	return (
		<div className="social">
			<a href={URLs.github} title="GitHub">
				<i className="fa fa-github"></i>
			</a>
			<a href={URLs.linkedin} title="LinkedIn">
				<i className="fa fa-linkedin"></i>
			</a>
			<a href={URLs.twitter} title="Twitter">
				<i className="fa fa-twitter"></i>
			</a>
			<a href={URLs.facebook} title="Facebook">
				<i className="fa fa-facebook"></i>
			</a>
		</div>
	);
	}
}