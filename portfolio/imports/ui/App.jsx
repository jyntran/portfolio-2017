import React, { Component } from 'react';
import Scroll, {
	Link,
	Element,
	Events,
	scroll,
	scrollSpy
} from 'react-scroll';

import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import AboutSection from './About.jsx';
import ProjectSection from './Projects.jsx';
import ContactSection from './Contact.jsx';
import OtherSection from './Other.jsx';
import Footer from './Footer.jsx';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		setTimeout(() => this.setState({ loading: false }), 1500);

	    Events.scrollEvent.register('begin', function() {
	    });
	    Events.scrollEvent.register('end', function() {
	    });
	    scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	render() {
		const { loading } = this.state;

		if (loading) { return null }

		return (
			<div className="app">
				<Element name="home" className="element">
					<Navigation/>
				</Element>

				<div className="container">
					<section className="header">
						<Header/>
					</section>
					
					<section className="about">
						<Element name="about" className="element">
							<AboutSection/>
						</Element>
					</section>

					<section className="projects">
						<Element name="projects" className="element">
							<ProjectSection/>
						</Element>
					</section>

					<section className="contact">
						<Element name="contact" className="element">
							<ContactSection/>
						</Element>
					</section>

					<section className="more">
						<OtherSection/>
					</section>
				</div>
				
				<Footer/>
			</div>
		);
	}
}