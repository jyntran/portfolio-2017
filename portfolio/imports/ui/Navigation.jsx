import React, { Component } from 'react';
import { Link } from 'react-scroll';

export default class Navigation extends Component {
    render(){
      return (
      	<div className="navigation">
          <div className="navigation-container">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="navigation-brand w5">
            </Link>
            <div className="navigation-bar w95">
          		<nav>
                <ul>
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}>
                        Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>
                        About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}>
                        Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}>
                        Contact
                    </Link>
                  </li>
                </ul>
          		</nav>
            </div>
          </div>
        </div>
      );
    }
}	