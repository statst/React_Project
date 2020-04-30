import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = ({ title, calories, img, ingredients, url }) => {
	const dishDetails = (
		<a href={url} target='_blank' rel='noopener noreferrer'>
			<button className='btn btn-success'>Click to see recipe details</button>
		</a>
	);
	return (
			
		<div className='card mt-5'>
			<h3 className='card-title text-center'>{title}</h3>
			<p>
				<span className='help-text'>Calories: {calories}</span>
			</p>
			<span className='card-text'>Ingredients:</span>
			<ul>
				{ingredients.map((ingredient, i) => (
					<li key={i}>{ingredient.text}</li>
				))}
			</ul>
			<center>
				<img
					className='rounded-circle mt-2'
					width='200px'
					height='200px'
					src={img}
					alt={title}
				/>
			</center>
			{/* <img src={img} alt='Dish' /> */}
			{/* <a href={url} target='_blank' rel='noopener noreferrer'>
				Recipe Details
			</a> */}
		
			<center>{dishDetails}</center>
		</div>
	);
};

export default Recipe;
