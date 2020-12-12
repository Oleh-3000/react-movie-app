import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import TrailerBlock from "../components/TrailerBlock/TrailerBlock";
import MovieInfo from "../components/MovieInfo/MovieInfo";

const MoviePage = ({match}) => {
	const [info, setInfo] = useState([]);
	let link = `https://www.omdbapi.com/?apikey=8b47da7b&plot=full&i=${match.params.id}`
	
	useEffect(()=>{
		fetch(link)
			.then(resp => resp.json())
			.then(data => setInfo(data));
	}, [])
	
	console.log('info', info);
	
	return(
		<div>
			<TrailerBlock/>
			
			<MovieInfo 
				// poster={info.Poster}
				// rating={info.imdbRating}
				// title={info.Title}
				info={info}
			/>
		</div>
	);
} 

export default withRouter(MoviePage);
