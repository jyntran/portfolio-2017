import React, { Component } from 'react';

import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import AboutSection from './About.jsx';
import ProjectSection from './Projects.jsx';
import CompanySection from './Companies.jsx';
import ContactSection from './Contact.jsx';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Navigation/>

				<Header/>

				<section>
					<AboutSection/>
				</section>

				<section>
					<ProjectSection/>
				</section>

				<section>
					<CompanySection/>
				</section>

				<section>
					<ContactSection/>
				</section>
			</div>
		);
	}
}