import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

import { Projects } from '../api/projects.js';

import Project from './Project.jsx';

class ProjectSection extends Component {
	renderProjects() {
		return this.props.projects.map((project) => (
			<Project key={project._id} project={project} />
		));
	}

	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<h2>Projects</h2>
				<div className="row align-center gutters">
					{this.renderProjects()}
				</div>
			</div>
		</div>
	);
	}
}

ProjectSection.propTypes = {
	projects: PropTypes.array.isRequired
};

export default createContainer(() => {
	return {
		projects: Projects.find({}).fetch()
	}
}, ProjectSection);
