import React from 'react';

function SearchHeader({ label }) {
	return (
		<header>
			<h1>Recipe</h1>
			<p className='muted'>
				Showing results for <strong>{label}</strong>
			</p>
		</header>
	);
}
export default SearchHeader;
