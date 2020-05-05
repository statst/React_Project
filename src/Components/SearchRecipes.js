import React from 'react';
import RecipeList from './RecipeList';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchRecipes(props) {
	return (
		<div>
			<Container>
				<Row>
					{props.recipe.length > 0 &&
						props.recipe.map((dish) => (
							<Col sm={true} key={dish.index} className='mb-3'>
								<Card style={{ width: '18rem' }} className='text-center'></Card>
								<Card.Img
									variant='top'
									src={dish.recipe.image}
									alt={dish.recipe}
								/>
								<Card.Body>
									{/* <Card.Title>{dish.label}</Card.Title> */}
									<Link to={`/Recipe/${dish.recipe.label}`}>
										<p>{dish.recipe.label}</p>
									</Link>
								</Card.Body>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
}

export default SearchRecipes;