import React from 'react';
import RecipeList from './RecipeList';
const SearchResults = ({ recipes }) => {
	if (!recipes.length) {
		return <h2>No Recipe Found!</h2>
	}
	return (
		<div className='recipes'>
			{recipes.map((recipe) => (
				<RecipeList key={recipe.id} image={recipe.recipe.image} name={recipe.recipe.label} />)	
			)}
		</div>
	);
}
  


export default SearchResults;