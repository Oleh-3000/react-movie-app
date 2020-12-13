import React from 'react';
import './Pagination.scss';

const Pagination = ({page, allItems, nextPage, prevPage}) => {
	return(
		<div className='Pagination'>
			<button type='button' className='btn-prev' onClick={prevPage}>
				Page {page}
			</button>
			
			<button type='button' className='btn-next' onClick={nextPage}>
				Total:
				{!allItems ? 0 : Math.floor(allItems/10) + 1}
			</button>
		</div>
	);
}

export default Pagination;
