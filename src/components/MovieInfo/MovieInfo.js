import React from 'react';
import './MovieInfo.scss';

const MovieInfo = ({info}) => {
	const {Poster, imdbRating, Title, Runtime, Genre, Year, Type, Plot} = info;
	console.log('movie info', info)
	
	return(
		<section>
			<div className="container">
				<div className='MovieInfo'>
					<div className="left-side">
						<img src={Poster} alt=""/>
						<div className="MovieInfo__rating">
							<h3>IMDB Rating:
								<br/>
								<span className="h2">{imdbRating}/</span>10
							</h3>
						</div>
					</div>
					<div className="right-side">
						<h2>{Title}</h2>
						<div className="right-side__inner">
							<ul>
								<li>Runtime: <b>{Runtime}</b></li>
								<li>Genre: <b>{Genre}</b></li>
								<li>Year: <b>{Year}</b></li>
								<li>Type: <b>{Type}</b></li>
							</ul>
							<p>{Plot}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MovieInfo;
