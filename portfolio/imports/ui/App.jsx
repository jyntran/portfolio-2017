import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Projects } from '../api/projects.js';
import { Companies } from '../api/companies.js';

import Project from './Project.jsx';
import Company from './Company.jsx';

class App extends Component {
	renderProjects() {
		return this.props.projects.map((project) => (
			<Project key={project._id} project={project} />
		));
	}

	renderCompanies() {
		return this.props.companies.map((company) => (
			<Company key={company._id} company={company} />
		));
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>jyntran</h1>
				</header>

				<section>
					<h2>Projects</h2>
					<div className="row align-center">
						{this.renderProjects()}
					</div>
				</section>

				<section>
					<h2>Companies</h2>
					<div className="row align-center auto gutter">
					</div>
				</section>

				<section>
					<h2>Contact</h2>
					<form method="post" action="" className="form">
						<div className="form-item">
							<label>Name</label>
							<input name="name" className="w50"/>
						</div>
						<div className="form-item">
							<label>Email</label>
							<input type="email" name="email" className="w50"/>
						</div>
						<div className="form-item">
							<label>Message</label>
							<textarea rows="6"></textarea>
						</div>
						<div className="form-item">
							<button>Submit</button>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

App.propTypes = {
	projects: PropTypes.array.isRequired,
	companies: PropTypes.array.isRequired
};

export default createContainer(() => {
	return {
		projects: Projects.find({}).fetch(),
		companies: Companies.find({}).fetch()
	};
}, App);