import React from 'react';
import MainSlider from "../components/MainSlider/MainSlider";
import SearchResults from "../components/SearchResults/SearchResults";

const SearchPage = () => {
	return (
		<div>
			<MainSlider/>
			<div className='container'>
			  <h1 className="main-title">
			    Explore movies & series
			  </h1>
			  <SearchResults />
			</div>
		</div>
	);
}

export default  SearchPage;
