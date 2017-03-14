import React, { Component, PropTypes } from 'react';

export default class Project extends Component {
	render() {
		return (
			<div className="col-6">
				{this.props.project.text}
			</div>
		);
	}
}

Project.propTypes = {
	project: PropTypes.object.isRequired,
};