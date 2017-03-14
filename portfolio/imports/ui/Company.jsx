import React, { Component, PropTypes } from 'react';

export default class Company extends Component {
	render() {
		return (
			<div className="col-4">
				<img src={this.props.company.image} alt={this.props.company.text} title={this.props.company.text} />
			</div>
		);
	}
}

Company.propTypes = {
	company: PropTypes.object.isRequired,
};