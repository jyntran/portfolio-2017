import React, { Component } from 'react';

import URLs from './URLs.jsx';
import SocialSection from './Social.jsx';

export default class OtherSection extends Component {
	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<SocialSection/>
			</div>
		</div>
	);
	}
}