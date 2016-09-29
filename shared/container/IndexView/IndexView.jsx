import React, { Component} from 'react';
import { Link } from 'react-router';


class IndexView extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render(){
	return (
		<div className="screen">
			Welcome to digitalhyperspace.com
        </div>
	);
	}
}

export default IndexView;