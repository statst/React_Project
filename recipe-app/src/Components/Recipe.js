import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ title, calories, img, ingredients, url }) => {
	console.log(url);
	return (
		<div>
			<h2>{title}</h2>
			<p>
				<span>Calories:</span> {calories}
			</p>
			<h3>Ingredients:</h3>
			<ul>
				{ingredients.map((ingredient, i) => (
					<li key={i}>{ingredient.text}</li>
				))}
			</ul>
			<img src={img} alt='Dish' />
			<a href={url} target='_blank' rel='noopener noreferrer'>
				Recipe Details
			</a>
		</div>
	);
};

export default Recipe;
