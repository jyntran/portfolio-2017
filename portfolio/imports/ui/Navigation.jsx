import React, { Component } from 'react';

export default class Navigation extends Component {
    render(){
      return (
      	<div className="navigation">
          <a href="#" className="navigation-brand w5">
          </a>
          <div className="navigation-bar w95">
        		<nav>
              <ul>
                <li><a href="#">Home</a></li> 
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Companies</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
        		</nav>
          </div>
        </div>
      );
    }
}	