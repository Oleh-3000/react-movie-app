import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import TrailerBlock from "../components/TrailerBlock/TrailerBlock";
import MovieInfo from "../components/MovieInfo/MovieInfo";

const MoviePage = ({match, history}) => {
	const [info, setInfo] = useState([]);
	let link = `https://www.omdbapi.com/?apikey=8b47da7b&plot=full&i=${match.params.id}`
	
	useEffect(() =>{
		fetch(link)
			.then(resp => resp.json())
			.then(data => setInfo(data));
	}, [])
	
	return(
		<section>
			<div className="headerPage">
				<TrailerBlock/>
				<div className="container back-link__block">
					<button type='button' onClick={history.goBack}  className="back-link">Back</button>
				</div>
			</div>
			
			<MovieInfo 
				info={info}
			/>
		</section>
	);
} 

export default withRouter(MoviePage);
