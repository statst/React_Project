import React from 'react';
import RecipeList from './RecipeList';
import SearchForm from './SearchForm';
import Recipe from './RecipeList';
import SearchRecipes from './SearchRecipes';


function Home({ handleChange, handleSubmit, searchString, recipe }) {
	return (
		<>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
				recipe={recipe}
			/>
		<SearchRecipes recipe = {recipe} />
		</>
	);
}
export default Home;
