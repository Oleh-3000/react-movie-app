import React from 'react';
import './TrailerBlock.scss';

const TrailerBlock = () => {

	return(
		<div className='TrailerBlock'>
			<iframe className='TrailerBlock__video' width="560" height="315" src="https://www.youtube.com/embed/zyBNekPZ5Ic" frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen ></iframe>
		</div>
	);
}

export default TrailerBlock;
