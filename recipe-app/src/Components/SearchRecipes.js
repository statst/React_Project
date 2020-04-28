import React from 'react';
import RecipeList from './RecipeList';
import { Link } from 'react-router-dom';

function SearchRecipes(props) {
	return (
		<div className='recipes'>
			{props.recipe.map((dish) => (
				<nav key={dish.recipe.label}>
					<Link to={`recipe/${dish.recipe.label}`}>
						<img src={dish.recipe.image} alt={dish.recipe.label} />
						<p>{dish.recipe.label}</p>
					</Link>
				</nav>
			))}
		</div>
	);
}

export default SearchRecipes;
