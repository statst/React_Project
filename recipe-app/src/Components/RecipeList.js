import React from 'react';

const RecipeList=(props) => {
	return (
		<div className='recipe'>
			<h1>{props.title}</h1>
			<p>{props.calories}</p>
			<img src={props.image} alt={props.title}/>
		</div>
	);
}
export default RecipeList;
