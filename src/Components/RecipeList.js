
import React from 'react';
import Recipe from './Recipe';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeList = (props) => {
	return (
		<div>
			<Container>
				<Row>
					{props.recipe.map((dish, i) => (
						<Recipe
							key={i}
							title={dish.recipe.label}
							calories={dish.recipe.calories}
							img={dish.recipe.image}
							ingredients={dish.recipe.ingredients}
							url={dish.recipe.url}
						/>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default RecipeList;
