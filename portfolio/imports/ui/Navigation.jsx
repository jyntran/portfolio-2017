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
              duration={500}
              offset={0}
              isDynamic={true}
              className="navigation-brand w5">
            </Link>
            <div className="navigation-bar w95">
          		<nav>
                <ul>
                  <li>
                    <Link
                      activeClass="navigation-active"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={1}
                      isDynamic={true}>
                        Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="navigation-active"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-150}
                      isDynamic={true}>
                        About
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="navigation-active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-150}
                      isDynamic={true}>
                        Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="navigation-active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-150}
                      isDynamic={true}>
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