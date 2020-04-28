import React from 'react';

function SearchHeader({ lastSearch }) {
	return (
		<header>
			<h1>Recipe</h1>
			<p className='muted'>
				Showing results for <strong>{lastSearch}</strong>
			</p>
		</header>
	);
}
export default SearchHeader;
