import React, { Component } from 'react';

export default class Header extends Component {
	render() {
	return (
		<header>
			<div className="header-inner">
				<div className="logo">
					<img src="img/logo-t.png"/>
				</div>
				<div className="name">
					<h1>Jensen Tran</h1>
				</div>
			</div>
		</header>
	);
	}
}