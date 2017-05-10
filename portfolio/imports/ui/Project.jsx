import React, { Component, PropTypes } from 'react';

export default class Project extends Component {
	render() {
		return (
			<div className="row gutters project-row">
				<div className="col col-6 project-thumb">
					<img src={this.props.project.thumb}
						alt={this.props.project.title}
						title={this.props.project.title} />
				</div>
				<div className="col col-6 project-info">
					<h3>{this.props.project.title}</h3>
					<p>{this.props.project.description}</p>
					<a href={this.props.project.live} className="button small">Live</a>&nbsp;
					<a href={this.props.project.source} className="button small">Source</a>
				</div>
			</div>
		);
	}
}

Project.propTypes = {
	project: PropTypes.object.isRequired,
};