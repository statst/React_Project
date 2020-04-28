import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import RecipeList from './Components/RecipeList';
import SearchRecipes from './Components/SearchRecipes';
import axios from 'axios';
import SearchHeader from './Components/SearchHeader';
import nextId from 'react-id-generator';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  // const searchRecipe = {
	const	key= process.env.REACT_APP_RECIPE_KEY;
	const APP_ID= '013e9ac4';
  // };
    // const url = `https://api.edamam.com/search?q=pasta&app_id=${APP_ID}&app_key=${key}`;
  const [recipe, setRecipe] =useState([]);
  const [searchString, setSearchString] = useState('recipe');
   const [lastSearch, setLastSearch] = useState('');
   const [query, setQuery] = useState('');
   const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${key}`;
  useEffect(()=>{
     getRecipes(searchString);
     console.log('use effect');
  }, [query]
);
  function getRecipes(searchString) {
		// const url = `https://api.edamam.com/search?q=yes&app_id=${searchRecipe.APP_ID}&app_key=${searchRecipe.key}`;
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
    setQuery(searchString);
  }
  return (
		<div className='App'>
			<h1 className='Heading'>CookPot</h1>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
			<SearchHeader lastSearch={lastSearch} />
			{ recipe.length > 0 && < SearchRecipes recipe ={recipe}/>}
		</div>
	);
}

export default App;
