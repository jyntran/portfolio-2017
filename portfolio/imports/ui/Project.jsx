import React, { Component } from 'react';

export default class Project extends Component {
	renderButtons() {
		const live = this.props.project.live;
		const source = this.props.project.source;
		return (
			<div className="form-buttons">
				{ live ?
					<a href={live} className="button small" target="_blank">Live</a>
					: null }
				{ source ?
					<a href={source} className="button small outline" target="_blank">Source</a>
					: null }
			</div>
		)	
	}

	renderThumb() {
		const thumbStyle = {
			"backgroundImage": "url('"+this.props.project.thumb+"')",
			"backgroundSize": "cover"
		};
		return (
			<div className="project-thumb"
				style={thumbStyle}>
			</div>
		);
	}

	renderInfo() {
		return (
			<div className="project-info">
				<h3>{this.props.project.title}</h3>
				<p>{this.props.project.description}</p>
				{this.renderButtons()}
			</div>		
		);
	}

	render() {
		return (
			<div className="col col-6 project">
				<div className="project-container">
					{this.renderThumb()}
					{this.renderInfo()}
				</div>
			</div>
		);
	}
}