import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
    render(){
      const myProps = {
      	'data-component': "sticky"
      }

      return (
      	<div className="navigation">
          <div className="row">
            <div className="navigation-brand col">
              <div className="row">
                <div className="navigation-brand-logo col col-3">
                  <a href="#">
                    <img src="img/logo.png"/>
                  </a>
                </div>
                <div className="navigation-brand-name col col-9">
                  <span>Jensen Tran</span>
                </div>
              </div>
            </div>
            <div className="navigation-bar col push-right">
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
		</div>
      );
    }
}	