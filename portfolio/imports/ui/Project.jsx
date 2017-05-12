import React, { Component } from 'react';

export default class Project extends Component {
	render() {
		return (
			<div className="col col-6 project">
				<div className="row">
					<div className="col col-6 project-thumb">
						<img src={this.props.project.thumb}
							alt={this.props.project.title}
							title={this.props.project.title} />
					</div>
					<div className="col col-6 project-info">
						<h3>{this.props.project.title}</h3>
						<p>{this.props.project.description}</p>
						{ this.props.project.live ?
							<a href={this.props.project.live} className="button small">Live</a>
							: null }
						{ this.props.project.source ?
							<a href={this.props.project.source} className="button small outline">Source</a>
							: null }
					</div>
				</div>
			</div>
		);
	}
}