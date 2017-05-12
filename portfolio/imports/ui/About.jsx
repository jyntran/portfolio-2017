import React, { Component } from 'react';

export default class AboutSection extends Component {
	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<div className="row">
					<div className="col col-6">
						<figure>
							<img src="img/noface.png"/>
							<figcaption>Hello world.</figcaption>
						</figure>
					</div>
					<div className="col col-6">
						<div className="row">
							<h2>How do you do?</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam hendrerit viverra erat. Aliquam varius sodales risus, non suscipit dolor dapibus dapibus. Aenean id tortor porta, pretium neque quis, dapibus tortor. Donec at bibendum justo, vitae pulvinar lacus. Aliquam nulla justo, iaculis condimentum elementum ac, tincidunt in urna. Morbi non sodales lacus, et rutrum nulla. Morbi imperdiet sapien elit. Etiam eu libero vitae turpis bibendum mattis ac sed turpis. Integer scelerisque cursus mi id convallis. Nulla eros nibh, rutrum sed ipsum a, ullamcorper euismod orci. Sed et congue lorem. Vivamus ac commodo leo. Mauris aliquam massa ligula, vel tincidunt nisi lacinia dignissim. Ut semper dui nunc, eu consectetur dui egestas a.</p>
						</div>
						<div className="row">
							<h3>Skills</h3>
							<ul>
								<li>Web Development</li>
								<li>Digital Media</li>
								<li>Technical Support</li>
							</ul>
						</div>
						<div className="row align-center">
							<ul>
								<li><a href="#" className="button"><i className="fa fa-file-text-o" aria-hidden="true"></i> Résumé</a></li>
								<li><a href="#" className="button"><i className="fa fa-github" aria-hidden="true"></i> GitHub</a></li>
								<li><a href="#" className="button"><i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	}
}