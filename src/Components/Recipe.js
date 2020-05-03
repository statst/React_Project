import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ title, calories, img, ingredients, url }) => {
	const dishDetails = (
		<a href={url} target='_blank' rel='noopener noreferrer'>
			<button className='success'>Recipe details</button>
		</a>
	);
	return (
		<div className='card mt-5'>
			<h3 className='card-title text-center'>{title}</h3>
			<p>
				<span className='calorie'>Calories: {Math.round(calories)}</span>
			</p>
			<span className='card-text'>Ingredients</span>
			<ul className='card-text-list'>
				{ingredients.map((ingredient, i) => (
					<li key={i}>{ingredient.text}</li>
				))}
			</ul>
			<center>
				<img
					className='img-fluid z-depth-3'
					width='500px'
					height='300px'
					src={img}
					alt={title}
				/>
			</center>
			<center>{dishDetails}</center>
		</div>
	);
};

export default Recipe;
