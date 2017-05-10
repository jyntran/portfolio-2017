import React, { Component } from 'react';

import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import ProjectSection from './Projects.jsx';
import CompanySection from './Companies.jsx';
import Contact from './Contact.jsx';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Navigation/>

				<Header/>

				<section>
					<About/>
				</section>

				<section>
					<ProjectSection/>
				</section>

				<section>
					<CompanySection/>
				</section>

				<section>
					<Contact/>
				</section>
			</div>
		);
	}
}