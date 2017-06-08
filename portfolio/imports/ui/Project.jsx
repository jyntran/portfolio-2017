import React, { Component } from 'react';

export default class Project extends Component {
	constructor() {
		super();
		this.state = {
			showInfo: false
		}

		this.handleInfo = this.handleInfo.bind(this);
	}

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
		var thumbStyle = {
			backgroundImage: "url('" + thumbUrl + "')"
		};

		var classes = "project-thumb ";
		if (this.state.showInfo) {
			classes += 'active';
		}

		return (
			<div className={classes}
				style={thumbStyle}>
			</div>
		);
	}

	renderInfo() {
		var classes = 'project-info ';
		if (this.state.showInfo) {
			classes += 'active';
		}

		return (
			<div className={classes}>
				<div className="project-info-container">
					<h3>{this.props.project.title}</h3>
					<p>{this.props.project.description}</p>
					{this.renderButtons()}
				</div>
			</div>
		);
	}

	renderButton() {
		var classes;
		if (this.state.showInfo) {
			classes = 'icon-cancel'
		} else {
			classes = 'icon-info'
		}
		return (
			<div className="project-info-button"
				onClick={this.handleInfo}>
				<i className={classes} aria-hidden="true"></i>
			</div>
		);
	}

	handleInfo(e) {
		const info = !this.state.showInfo;
		this.setState({
			showInfo: info
		});
	}

	render() {
		return (
			<div className="project">
				<div className="project-container">
					{this.renderThumb()}
					{this.renderInfo()}
					{this.renderButton()}
				</div>
			</div>
		);
	}
}