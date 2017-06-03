import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Company extends Component {
	render() {
		return (
			<div className="company">
				<img src={this.props.company.image} alt={this.props.company.text} title={this.props.company.text} />
			</div>
		);
	}
}

Company.propTypes = {
	company: PropTypes.object.isRequired,
};