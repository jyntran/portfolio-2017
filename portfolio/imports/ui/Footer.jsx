import React, { Component } from 'react';

export default class Footer extends Component {
	getCurrentYear() {
		return new Date().getFullYear();
	}

	render() {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="copy w100">
					<p className="small">
						&copy; 2014 - {this.getCurrentYear()} Jensen Tran
					</p>
				</div>
			</div>
		</div>
	)
	}
}