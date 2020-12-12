import React, {useState, useEffect} from 'react';
import './Searchresults.scss';
import MovieItem from '../MovieItem/MovieItem';

import searchIcon from '../../image/search icon.svg';

const SearchResults = () => {
	const [resultList, setResultList] = useState([]);
	const [searchQuery,setSearchQuery] = useState('');
	const [isLoading,setLoading] = useState(false);
	const [isError,setError] = useState(false);

	const getSearchQueryValue = e => {
		setSearchQuery(e.target.value);
	}

	let link = `http://www.omdbapi.com/?apikey=8b47da7b&s=${searchQuery}`;
	console.log('searchQuery', searchQuery);
	console.log('link', link);
	console.log('resultList', resultList);
	

	const getResultList = async () => {
		setLoading(true);
		try {
			const response = await fetch(link);
			const {Search} = await response.json();
			setResultList(Search);
			setLoading(false);
		} catch (e) {
			setLoading(false);
			setError(true);
		};
	}
	
	useEffect(() => {
		getResultList();
	}, []);
	
	const handleSubmit = e => {
		e.preventDefault();
		getResultList();
	}

	const addMovieList = () => {
		if (isLoading) {
			return <div> ...loading  </div>
		}

		if (isError) {
			return <div>ERROR</div>
		}
		if(resultList) {
			console.log('resultList 11111', resultList);
			return (
				resultList.map((movie) => {
					return(
						<MovieItem
							key={movie.imdbID}
							movieImg={movie.Poster}
							movieTitle={movie.Title}
							movieYear={movie.Year}
							movieType={movie.Type}
							movieId={movie.imdbID}
						/>
					);
				})
			)
		}
	}
	
	return (
		<div className='SearchResults'>
			<form onSubmit={handleSubmit}>
				<input type="text"
							 className='SearchResults__input'
							 placeholder='Search ...'
							 value={searchQuery}
							 onChange={getSearchQueryValue}
				/>
				<button type='submit'>
					<img src={searchIcon} alt=""/>
				</button>
			</form>
			<div className='SearchResults__inner'>
				{addMovieList()}
			</div>
		</div>
	);
}

export default SearchResults;
