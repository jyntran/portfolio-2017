import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
	return (
		<div className="footer">
			<div className="row">
				<div className="copy col col-6">
					<p className="small">&copy; 2017 Jensen Tran<br/>
					<span className="smaller">Powered by ReactJS and MeteorJS</span></p>
				</div>
				<div className="social col col-6">
					<a href="#"><i className="fa fa-facebook social-icon" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-twitter social-icon" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
	)
	}
}