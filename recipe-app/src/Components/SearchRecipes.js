import React from 'react';
import RecipeList from './RecipeList';

const SearchRecipes = ({ recipe }) => {
	if (!recipe.length) {
		return <h2>No Recipe Found!</h2>
	}
	return (
		<div className='recipes'>
			{recipe.map((dish) => (
				<RecipeList title={dish.recipe.label} calories={dish.recipe.calories} image={dish.recipe.image}/>)	
			)}
		</div>
	);
}
  
export default SearchRecipes;