import React, {Component} from 'react';
import Slider from 'react-slick';

class IntroCarosel extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render(){
		var settings = {
			dots: true,
		    infinite: true,
		    speed: 500,
		    slidesToShow: 1,
		    slidesToScroll: 4
		};
		return (
			<Slider {...settings}>
			  <div>1</div>
	          <div>2</div>
	          <div>3</div>
	          <div>4</div>
			</Slider>
		);
	}
}

export default IntroCarosel;