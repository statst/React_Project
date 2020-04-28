import React from 'react';
import RecipeList from './RecipeList';

const SearchRecipes = ({ recipe }) => {
	if (!recipe.length) {
		return <h2>No Recipe Found!</h2>
	}
	console.log(recipe);
	return (
		<div>
			{recipe.map(dish => (
				<RecipeList key = {dish.recipe.label} title={dish.recipe.label} calories={dish.recipe.calories} image={dish.recipe.image}/>)	
			)}
		</div>
	);
}
  
export default SearchRecipes;