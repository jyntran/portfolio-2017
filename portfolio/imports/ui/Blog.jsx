import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';

export default class BlogSection extends Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		const url = "http://blog.jyntran.ca/atom.xml";
		var json = {};

	    $.ajax({
	    	url: url,
	        accepts:{
	            xml: 'application/rss+xml'
	        },
	        dataType: 'xml',
	        type: 'GET',
	        success: function(data) {
	            var feed = $(data).find('feed');
	            json.title = feed.children('title').text();
	            json.link = feed.children('id').text();
	            json.entries = [];

	            $(feed).find("entry").each(function(i) {
	                var elem = $(this);
	                var entry = {
	                	title: elem.find('title').text(),
	                	link: elem.find('id').text(),
	                	date: new Date(elem.find('published').text()).toLocaleDateString()
	                };
	                json.entries.push(entry);
	                return i<2;
	            });

	            this.setState({feed: json});

	        }.bind(this)   
	    });
	}

	renderBlogLink() {
		if (this.state.feed) {
			return (
				<a href={this.state.feed.link} target="_blank" className="button">
					Go to Blog
				</a>
			);
		}
	}

	renderEntries() {
		if (this.state.feed) {
			return this.state.feed.entries.map((entry) => (
				<li key={entry.link}>
					<a href={entry.link} target="_blank">
					({entry.date}) {entry.title} 
					</a>
				</li>
			));
		}
	}

	render() {
	return (
		<div className="row align-center">
			<div className="col col-8">
				<h2>Blog</h2>
				<div className="blog-container">
					<h3>Recent Entries</h3>
					<ul>{this.renderEntries()}</ul>
					{this.renderBlogLink()}
				</div>
			</div>
		</div>
	);
	}
}