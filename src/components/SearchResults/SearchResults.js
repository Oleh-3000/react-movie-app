import React, {useState, useEffect} from 'react';
import './Searchresults.scss';
import MovieItem from '../MovieItem/MovieItem';
import Pagination from "../Pagination/Pagination";
import searchIcon from '../../image/search icon.svg';

const SearchResults = () => {
	const [resultList, setResultList] = useState([]);
	const [items, setItems] = useState('');
	let [page, setPage] = useState(1);
	const [searchQuery,setSearchQuery] = useState('');
	const [isLoading,setLoading] = useState(false);
	const [isError,setError] = useState(false);

	const getSearchQueryValue = e => {
		setSearchQuery(e.target.value);
	}

	const getResultList = async (search, page = 1) => {
		let link = `http://www.omdbapi.com/?apikey=8b47da7b&s=${search}&page=${page}`;
		
		setLoading(true);
		
		try {
			const response = await fetch(link);
			const {Search, totalResults} = await response.json();
			setItems(totalResults);
			setResultList(Search);
			setLoading(false);
		} catch (e) {
			setLoading(false);
			setError(true);
		};
	}
	
	useEffect(() => {
		getResultList(searchQuery, page);
	}, []);
	
	const handleSubmit = e => {
		e.preventDefault();
		setPage(1);
		getResultList(searchQuery, page);
	}

	const addMovieList = () => {
		if (isLoading) {
			return <div> ...loading  </div>
		}

		if (isError) {
			return <div>ERROR</div>
		}
		if(resultList) {
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
	
	const prevPage = () => {
		if (page !== 1) {
			setPage(page -=1);
			getResultList(searchQuery, page);
		}
	}
	
	const nextPage = () => {
		setPage(page +=1)
		getResultList(searchQuery, page);
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
				
				<Pagination
					page={page}
					allItems={items}
					prevPage={prevPage}
					nextPage={nextPage}
				/>
			</div>
		</div>
	);
}

export default SearchResults;
