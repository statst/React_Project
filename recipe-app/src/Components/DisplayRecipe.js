import React from 'react';
import RecipeList from './RecipeList';
import SearchForm from './SearchForm';
import Recipe from './RecipeList';
import SearchRecipes from './SearchRecipes';


function Home({ handleChange, handleSubmit, searchString, recipe, url }) {
	return (
		<>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
				recipe={recipe}
				url ={url}
			/>
		<SearchRecipes recipe = {recipe} />
		</>
	);
}
export default Home;
