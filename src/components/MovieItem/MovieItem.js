import React from 'react';
import './MovieItem.scss';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

const MovieItem = ({movieTitle, movieYear, movieType, movieImg, movieId}) => {

	return(
		<div className='MovieItem'>
			<img src={movieImg} alt=""/>
			<div className='MovieItem__inner'>
				<h3 className="MovieItem__title">
					<Link to={`/movie-page/${movieId}`}>{movieTitle}</Link>
				</h3>
				<div className="MovieItem__right-block">
					<h6>{movieYear}</h6>
					<h6>{movieType}</h6>
				</div>
			</div>
		</div>
	);
}

MovieItem.propTypes = {
	movieTitle: PropTypes.string,
	movieYear: PropTypes.string,
	movieType: PropTypes.string,
	movieImg: PropTypes.string,
	movieId: PropTypes.string,
}

MovieItem.defaultTypes = {
	movieTitle: '',
	movieYear: '',
	movieType: '',
	movieImg: '',
	movieId: '',
}

export default MovieItem;
