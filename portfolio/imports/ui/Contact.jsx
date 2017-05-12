import React, { Component } from 'react';

export default class ContactSection extends Component {
	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<h2>Contact</h2>
				<form method="post" action="" className="form">
					<div className="form-item">
						<label>Name</label>
						<input name="name"/>
					</div>
					<div className="form-item">
						<label>Email</label>
						<input type="email" name="email"/>
					</div>
					<div className="form-item">
						<label>Message</label>
						<textarea rows="6"></textarea>
					</div>
					<div className="form-item">
						<button>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
	}
}