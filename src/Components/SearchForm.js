import React from 'react';

function SearchForm(props) {
	const { handleSubmit, handleChange, searchString } = props;
	return (
		<form onSubmit={handleSubmit} className='recipeSearch'>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default SearchForm;
