import React from 'react';

const RecipeList=(props) => {
	return (
		<div >
			<h1>{props.recipe.label}</h1>
			<p>{props.recipe.calories}</p>
			<img src={props.recipe.image} alt={props.recipe.title} />
			<ol>
				{props.recipe.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient.text}</li>
				))}
			</ol>
		</div>
	);
}
export default RecipeList;
