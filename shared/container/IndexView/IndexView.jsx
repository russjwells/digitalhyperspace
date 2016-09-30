import React, { Component} from 'react';
import { Link } from 'react-router';


class IndexView extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render(){
	return (
		<div className="content">
			<div className="screen" id="intro">
				intro carosel
	        </div>
	        <div className="screen" id="services">
				<h3>Experimental Technology</h3>
				<p>Virtual and augmented reality technologies, evolutionary gaming modalities, immersive networked social spaces...</p>
				<h3>Websites // Web Apps</h3>
				<p>We design and engineer state of the art pieces of internet. Need an online store? Portfolio or artist’s page? Blog? Something Bigger? We’d love to make your vision manifest.</p>
				<h3>Mobile</h3>
				<p>Native cross-platform mobile development</p>
	        </div>
	        <div className="screen" id="contact">
				contact form
	        </div>
        </div>
	);
	}
}

export default IndexView;