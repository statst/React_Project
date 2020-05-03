/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import RecipeList from './Components/RecipeList';
import SearchRecipes from './Components/SearchRecipes';
import axios from 'axios';
import SearchHeader from './Components/SearchHeader';
import nextId from 'react-id-generator';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DisplayRecipe from './Components/DisplayRecipe';
import Recipe from './Components/Recipe';
import Footer from './Components/Footer';

function App() {
	const searchOptions = {
		key: process.env.REACT_APP_RECIPE_KEY,
		APP_ID: '013e9ac4',
	};
	const [recipe, setRecipe] = useState([]);
	const [searchString, setSearchString] = useState('almond ice cream');
	const [lastSearch, setLastSearch] = useState('');
	const [query, setQuery] = useState(false);
	useEffect(() => {
		getRecipes(searchString);
		console.log('use effect');
	}, []);
	function getRecipes(searchString) {
		const url = `https://api.edamam.com/search?q=${searchString}&app_id=${searchOptions.APP_ID}&app_key=${searchOptions.key}`;
		axios
		.get(url)
		.then((response) => {
				setRecipe(response.data.hits);
				console.log(response.data.hits);
				setLastSearch(searchString);
				setSearchString('');
			})
			.catch(console.error);
	}
	function handleChange(event) {
		setSearchString(event.target.value);
	}
	function handleSubmit(event) {
		event.preventDefault();
		getRecipes(searchString);
		// setQuery(!query);
	}
	return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<div className='Heading'>
						<h1>CookPot</h1>
						<p> Find your favorite recipes here</p>
					</div>
				</Link>
			</nav>
				{/* <SearchHeader lastSearch={lastSearch} /> */}
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<Route
				path='/'
				exact={true}
				render={() => {
					return (
						<DisplayRecipe
							getRecipes={getRecipes}
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							searchString={searchString}
							recipe={recipe}
						/>
					);
				}}
			/>

			<Route
				path='/RecipeList/:label'
				render={(routerProps) => {
					return <RecipeList match={routerProps.match} recipe={recipe} />;
				}}
			/>
			{/* <SearchHeader lastSearch={lastSearch} /> */}
			<Footer />
		</div>
	);
}

export default App;
