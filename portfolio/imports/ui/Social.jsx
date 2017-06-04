import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

export default class SocialSection extends Component {
	render() {
	return (
		<div className="social">
			<a href="#">
				<i className="fa fa-github"></i>
			</a>
			<a href="#">
				<i className="fa fa-linkedin"></i>
			</a>
			<a href="#">
				<i className="fa fa-twitter"></i>
			</a>
			<a href="#">
				<i className="fa fa-facebook"></i>
			</a>
		</div>
	);
	}
}