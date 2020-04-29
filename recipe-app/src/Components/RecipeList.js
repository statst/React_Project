import React from 'react';
import Recipe from './Recipe'
import { Link } from 'react-router-dom';

const RecipeList=(props) => {
	return (
		<>
			{props.recipe.map((dish, i) => (
				// <Link to={`/RecipeList/${dish.recipe.label}`}>
					<Recipe
						key={i}
						title={dish.recipe.label}
						calories={dish.recipe.calories}
						img={dish.recipe.image}
						ingredients={dish.recipe.ingredients}
						url={dish.recipe.url}
					/>
				// </Link>
			))}
		</>
	);
}

	

export default RecipeList;
