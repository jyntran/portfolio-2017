import React, { Component } from 'react';

export default class Project extends Component {
	renderButtons() {
		const live = this.props.project.live;
		const source = this.props.project.source;
		return (
			<div className="form-buttons links">
				<ul>
					{ live ?
						<li><a href={live} target="_blank" title="Live">Live</a></li>
						: null }
					{ source ?
						<li><a href={source} target="_blank" title="Source">Source</a></li>
						: null }
				</ul>
			</div>
		)	
	}

	renderThumb() {
		const thumbUrl = this.props.project.thumb ? this.props.project.thumb : 'img/project/_.jpg';
		const thumbStyle = {
			backgroundImage: "url('" + thumbUrl + "')"
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