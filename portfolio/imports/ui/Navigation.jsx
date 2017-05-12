import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Navigation extends Component {
    render(){
      const myProps = {
      	'data-component': "sticky"
      }

      return (
      	<div className="navigation" {...myProps}>
			<nav>
				<a>Home</a> |
        <a>About</a> |
        <a>Projects</a> |
        <a>Companies</a> |
        <a>Contact</a>
			</nav>
		</div>
      );
    }
}	