import React from 'react';
import './SliderItem.scss';
import PropTypes from 'prop-types';

const SliderItem = ({imageSrc, year, movieName, darkStyle}) => {
	return(
		<div className={darkStyle ? 'SliderItem SliderItem_darkStyle' : 'SliderItem'}>
			<img src={imageSrc} alt=""/>
			<div className='SliderItem__caption container'>
				<h4>
					{year}
				</h4>
				<h2>
					{movieName}
				</h2>
			</div>
		</div>
	);
}

SliderItem.propTypes = {
	imageSrc: PropTypes.string,
	year: PropTypes.number,
	movieName: PropTypes.string,
	darkStyle: PropTypes.bool
}

SliderItem.defaultProps = {
	imageSrc: '',
	year: 0,
	movieName: '',
	darkStyle: false
}

export default SliderItem;
