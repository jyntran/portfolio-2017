import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

function Status(props) {
	const success = props.success;
	const error = props.error;
	if (error) {
		return (
			<div className="message error contact-message" data-component="message">{error.message}<span className="close small"></span></div>
		);
	} else if (success) {
		return (
			<div className="message success contact-message" data-component="message">Success! Your message has been sent.<span className="close small"></span></div>
		);
	} else { return null; }
}

export default class ContactSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nameVal: '',
			emailVal: '',
			messageVal: '',
			beemailVal: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleEmailChangeConfirm = this.handleEmailChangeConfirm.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClearForm = this.handleClearForm.bind(this);
		this.handleClearStatus = this.handleClearStatus.bind(this);
		this.handleError = this.handleError.bind(this);
		this.handleSuccess = this.handleSuccess.bind(this);
	}

	componentDidMount() {
		$('#emailConfirm').hide();
	}

	handleNameChange(e) {
		this.setState({nameVal: e.target.value});
	}

	handleEmailChange(e) {
		this.setState({emailVal: e.target.value});
	}

	handleEmailChangeConfirm(e) {
		this.setState({beemailVal: e.target.value});
	}

	handleMessageChange(e) {
		this.setState({messageVal: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();

		let form = this;

		this.handleClearStatus();

		var formData = {
			name: this.state.nameVal,
			email: this.state.emailVal,
			beemail: this.state.beemailVal,
			message: this.state.messageVal
		}

		Meteor.call('sendEmail', formData, function(err){
			if (err) {
				//console.log('Error', err);
				form.handleError(err);
			} else {
				//console.log('Success: email sent');
				form.handleSuccess();
			}
		})
	}

	handleClearForm(e) {
		e.preventDefault();
		this.setState({
			nameVal: '',
			emailVal: '',
			messageVal: ''
		});
	}

	handleError(e) {
		this.setState({error: e});
	}

	handleSuccess(e) {
		this.setState({success: true});
	}

	handleClearStatus(e) {
		this.setState({
			error: false,
			success: false
		});
	}

	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<h2>Contact</h2>
				<form method="post" action="" className="form" onSubmit={this.handleSubmit}>
					<div className="form-item">
						<label>Name:</label>
						<input required type="text" name="name" value={this.state.nameVal} onChange={this.handleNameChange} />
					</div>
					<div className="form-item">
						<label>Email:</label>
						<input required type="email" name="email" value={this.state.emailVal} onChange={this.handleEmailChange} />
						<input id="emailConfirm" name="emailConfirm" value={this.state.beemailVal} onChange={this.handleEmailChangeConfirm} />
					</div>
					<div className="form-item">
						<label>Message:</label>
						<textarea required rows="6" value={this.state.messageVal} onChange={this.handleMessageChange}></textarea>
					</div>
					<div className="form-item form-buttons contact-form-buttons">
						<button className="button" type="submit">Submit</button>
						<button className="button secondary" onClick={this.handleClearForm}>Clear All</button>
						<Status success={this.state.success} error={this.state.error} />
					</div>
				</form>
			</div>
		</div>
	);
	}
}