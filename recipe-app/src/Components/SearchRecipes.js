import React from 'react';
import RecipeList from './RecipeList';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

function SearchRecipes(props) {
	return (
		<div className='recipes'>
			{props.recipe.length > 0 && 
			props.recipe.map((dish) => (
				<nav key={dish.recipe.label}>
					<Link to={`/RecipeList/${dish.recipe.label}`}>
						<img src={dish.recipe.image} alt={dish.recipe.label} />
						<p>{dish.recipe.label}</p>
					</Link>
				</nav>
			))}
			{/* {props.recipe.map((dish, i) => (
			<Recipe
					key={i}
					title={dish.recipe.label}
					calories={dish.recipe.calories}
					img={dish.recipe.image}
					ingredients={dish.recipe.ingredients}
				/>
				))} */}
		</div>
	);
}

export default SearchRecipes;
