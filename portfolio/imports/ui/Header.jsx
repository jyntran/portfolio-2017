import React, { Component } from 'react';
import { Link } from 'react-scroll';

import Logo from './Logo.jsx';

export default class Header extends Component {
	render() {
	return (
		<header>
			<div className="header-inner">
				<div className="logo">
					<Logo/>
				</div>
				<div className="name">
					<h1>Jensen Tran</h1>
				</div>
			</div>
		</header>
	);
	}
}