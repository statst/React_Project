
import React from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeList = (props) => {
	console.log(props.recipe[0]);
let recipe = props.recipe[0] && props.recipe[0].recipe;
	return (
		<div>
			<Container>
				<Row>
					
						{recipe && <Recipe
							title={recipe.label}
							calories={recipe.calories}
							img={recipe.image}
							ingredients={recipe.ingredients}
							url={recipe.url}
						/>}
				</Row>
			</Container>
		</div>
	
	)
}

export default RecipeList;
