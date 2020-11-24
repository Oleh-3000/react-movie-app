import React, {Component} from 'react';
import Slider from "react-slick";
import './MainSlider.scss';
import SliderItem from "../SliderItem/SliderItem";

import slide1 from '../../image/slide-1.jpg';
import slide2 from '../../image/slide-2.jpg';

export default class MainSlider extends Component {
	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className='MainSlider'>
				<Slider {...settings}>
					<SliderItem 
						imageSrc={slide1}
						year={2020}
						movieName={'superman'}
						darkStyle={true}
					/>
					<SliderItem
						imageSrc={slide2}
						year={2020}
						movieName={'batman'}
					/>
				</Slider>
			</div>
		);
	}
}
