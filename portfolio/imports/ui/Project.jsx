import React, { Component, PropTypes } from 'react';

export default class Project extends Component {
	render() {
		return (
			<div className="col-12">
				<div className="row">
					<div className="col-6">
						<img src={this.props.project.thumb}
						alt={this.props.project.title}
						title={this.props.project.title} />
					</div>
					<div className="col-6">
						<h3>{this.props.project.title}</h3>
						<p>{this.props.project.description}</p>
						<a href={this.props.project.live} className="button">Live</a>
						<a href={this.props.project.source} className="button">Source</a>
					</div>
				</div>
			</div>
		);
	}
}

Project.propTypes = {
	project: PropTypes.object.isRequired,
};