import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="copy w50 float-left">
					<p className="small">&copy; 2017 Jensen Tran</p>
				</div>
				<div className="social w50 float-right">
					<a href="#"><i className="fa fa-facebook social-icon" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-twitter social-icon" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
	)
	}
}