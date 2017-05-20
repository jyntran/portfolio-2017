import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class ContactSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emailVal: '',
			messageVal: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleNameChange(e) {
		this.setState({nameVal: e.target.value});
	}

	handleEmailChange(e) {
		this.setState({emailVal: e.target.value});
	}

	handleMessageChange(e) {
		this.setState({messageVal: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		var formData = {
			email: this.state.emailVal,
			message: this.state.messageVal
		}

		Meteor.call('sendEmail', formData, function(err){
			if (err) {
				console.log('Error', err);
			} else {
				FlowRouter.go('/contact');
			}
		})
	}

	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<h2>Contact</h2>
				<form method="post" action="" className="form" onSubmit={this.handleSubmit}>
					<div className="form-item">
						<label>Name:</label>
						<input type="text" name="name" value={this.state.nameVal} onChange={this.handleNameChange} />
					</div>
					<div className="form-item">
						<label>Email:</label>
						<input type="email" name="email" value={this.state.emailVal} onChange={this.handleEmailChange} />
					</div>
					<div className="form-item">
						<label>Message:</label>
						<textarea rows="6" value={this.state.messageVal} onChange={this.handleMessageChange}></textarea>
					</div>
					<div className="form-item">
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
	}
}