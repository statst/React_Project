import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import RecipeList from './Components/RecipeList';
import SearchRecipes from './Components/SearchRecipes';
import axios from 'axios';

function App() {
  // const searchRecipe = {
	const	key= process.env.REACT_APP_RECIPE_KEY;
	const APP_ID= '013e9ac4';
  // };
    const url = `https://api.edamam.com/search?q=yes&app_id=${APP_ID}&app_key=${key}`;
  const [recipes, setRecipes] =useState([]);
  const [searchString, setSearchString] = useState('recipes');
  useEffect(()=>{
     getRecipes();
     console.log('use effect');
  }, []
);
  function getRecipes(){
    // const url = `https://api.edamam.com/search?q=yes&app_id=${searchRecipe.APP_ID}&app_key=${searchRecipe.key}`;
    
    axios.get(url)
    .then(response => {
      setRecipes(response.data.hits);
      console.log(response);
    })
    .catch(console.error);
}
  function handleChange(event){
    setSearchString(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    getRecipes();
  }
  return (
		<div className='App'>
			<h1>CookPot</h1>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
			/>
      <RecipeList />
		</div>
	);
}

export default App;
