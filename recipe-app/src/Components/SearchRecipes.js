import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchRecipes(){
    return (
			<form className='recipeSearch'>
				<input placeholder='Search' type='text' name='searchString' required />
				<button type='submit'>Search</button>
			</form>
		);
}

export default SearchRecipes;