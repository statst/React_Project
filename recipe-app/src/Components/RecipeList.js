import React from 'react';

const RecipeList=({title, calories, image}) => {
	return (
		<div className='recipe'>
			<h1>{title}</h1>
			<p>{calories}</p>
			<img src={image} alt={title}/>
		</div>
	);
}
export default RecipeList;
