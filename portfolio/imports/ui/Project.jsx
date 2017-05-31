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
					<a href={source} className="button small" target="_blank">Source</a>
					: null }
			</div>
		)	
	}

	renderThumb() {
		const thumbUrl = this.props.project.thumb ? this.props.project.thumb : 'img/project/_.jpg';
		const thumbStyle = {
			"backgroundImage": "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url('" + thumbUrl + "')"
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
				<div className="project-info-container">
					<h3>{this.props.project.title}</h3>
					<p>{this.props.project.description}</p>
					{this.renderButtons()}
				</div>
			</div>		
		);
	}

	render() {
		return (
			<div className="project">
				<div className="project-container">
					{this.renderThumb()}
					{this.renderInfo()}
				</div>
			</div>
		);
	}
}