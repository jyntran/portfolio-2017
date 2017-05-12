import React, { Component } from 'react';

export default class Project extends Component {
	render() {
		return (
			<div className="col col-6 project">
				<figure>
					<img src={this.props.project.thumb}
						alt={this.props.project.title}
						title={this.props.project.title} />
					<figcaption>
						<h3>{this.props.project.title}</h3>
						<p>{this.props.project.description}</p>
						<ul>
						{ this.props.project.live ?
							<li><a href={this.props.project.live} className="button small">Live</a></li> 
							: null }
						{ this.props.project.source ?
							<li><a href={this.props.project.source} className="button small outline">Source</a></li>
							: null }
						</ul>
					</figcaption>
				</figure>
			</div>
		);
	}
}