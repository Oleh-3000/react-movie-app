import React from 'react';
import styles from './SliderItem.module.scss';
import PropTypes from 'prop-types';

const SliderItem = ({imageSrc, year, movieName, darkStyle}) => {
	let slideClasses = styles.SliderItem;
	if (darkStyle) {
		slideClasses += ' ' + styles.SliderItem_darkStyle
	}
	
	return(
		<div className={slideClasses}>
			<img src={imageSrc} alt=""/>
			<div className={styles['SliderItem__caption']}>
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
