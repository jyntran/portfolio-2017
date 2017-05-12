import React, { Component } from 'react';

import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import AboutSection from './About.jsx';
import ProjectSection from './Projects.jsx';
import CompanySection from './Companies.jsx';
import ContactSection from './Contact.jsx';
import Footer from './Footer.jsx';

export default class App extends Component {
	render() {
		return (
			<div>
				<Navigation/>

				<div className="container">
					<section className="header">
						<Header/>
					</section>
					
					<section className="about">
						<AboutSection/>
					</section>

					<section className="projects">
						<ProjectSection/>
					</section>

					<section className="companies">
						<CompanySection/>
					</section>

					<section className="contact">
						<ContactSection/>
					</section>
				</div>
				<Footer/>
			</div>
		);
	}
}