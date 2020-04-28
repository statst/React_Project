import React from 'react';

const RecipeList=(props) => {
	return (
		<div className='recipe'>
			<h1>{props.title}</h1>
			<p>{props.calories}</p>
			<img src={props.image} alt={props.title} />
			<ul>
				{props.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient.text}</li>
				))}
			</ul>
		</div>
	);
}
export default RecipeList;
