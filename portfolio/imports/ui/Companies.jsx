import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Companies } from '../api/companies.js';

import Company from './Company.jsx';

class CompanySection extends Component {
	renderCompanies() {
		return this.props.companies.map((company) => (
			<Company key={company._id} company={company} />
		)).reverse();
	}

	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<h2>Companies</h2>
				<div className="row align-center gutters">
					{this.renderCompanies()}
				</div>
			</div>
		</div>
	);
	}
}

CompanySection.propTypes = {
	companies: PropTypes.array.isRequired
};

export default createContainer(() => {
	return {
		companies: Companies.find({}).fetch()
	};
}, CompanySection);