import React, { Component} from 'react';
import { Link } from 'react-router';


class IndexView extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render(){
	return (
		<div className="pagebody">
			<div className="screen" id="intro">
				Welcome to digitalhyperspace.com
	        </div>
	        <div className="screen" id="services">
				Welcome to digitalhyperspace.com
	        </div>
	        <div className="screen" id="contact">
				Welcome to digitalhyperspace.com
	        </div>
        </div>
	);
	}
}

export default IndexView;