import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import RecipeList from './Components/RecipeList';
import SearchRecipes from './Components/SearchRecipes';
import axios from 'axios';
import SearchHeader from './Components/SearchHeader';
import nextId from 'react-id-generator';
import { BrowserRouter, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import DisplayRecipe from './Components/DisplayRecipe';
import Recipe from './Components/Recipe';

function App() {
  const searchOptions = {
	key: process.env.REACT_APP_RECIPE_KEY,
	APP_ID: '013e9ac4',
  };
    // const url = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${key}`;
  const [recipe, setRecipe] =useState([]);
  const [searchString, setSearchString] = useState('');
   const [lastSearch, setLastSearch] = useState('');
   const [query, setQuery] = useState(false);
//    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${key}`;
  useEffect(()=>{
     getRecipes(searchString);
     console.log('use effect');
  }, []
);
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
  function handleChange(event){
    setSearchString(event.target.value);
  }
  function handleSubmit(event){
	event.preventDefault();
	getRecipes(searchString);
    setQuery(!query);
  }
  return (
		<div className='App'>
			<nav>
				<Link to='/'>
					<h1 className='Heading'>CookPot</h1>
				</Link>
				{/* <Link to='/RecipeList'>Recipe</Link> */}
			</nav>
			<Route
				path='/'
				exact={true}
				render={() => {
					return (
						<DisplayRecipe
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							searchString={searchString}
							recipe={recipe}
						/>
					);
				}}
			/>

			<Route
				path='/RecipeList'
				render={(routerProps) => {
					return <RecipeList match={routerProps.match} 
					recipe = {recipe} />;
				}}
			/>
			{/* <Route 
				path='/RecipeList/:label'
				render={(routerProps) => {	
					return	(<Recipe match={routerProps.match}
					recipe = {recipe} 
					/>)
				}}
			/> */}
			{/* <Recipe recipe={recipe} /> */}
			{/* <RecipeList /> */}
			{/* <SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
        searchString={searchString}
			/> */}
			{/* <SearchHeader lastSearch={lastSearch} />
			{recipe.length > 0 && <SearchRecipes recipe={recipe} />} */}
		</div>
	);
}

export default App;
