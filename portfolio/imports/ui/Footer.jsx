import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
	return (
		<div className="footer">
			<div className="row">
				<div className="fm col col-1">
					<a href="#"><img src="img/eq.gif"/></a>
				</div>
				<div className="copy col col-10">
					<span className="small">&copy; 2017 Jensen Tran</span>
				</div>
				<div className="social col col-1">
					<a href="#"><i className="fa fa-facebook social-icon" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-twitter social-icon" aria-hidden="true"></i></a>
					<a href="#"><i className="fa fa-reddit social-icon" aria-hidden="true"></i></a>
				</div>
			</div>
		</div>
	)
	}
}