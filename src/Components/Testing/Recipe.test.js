import React from 'react';
import { shallow } from 'enzyme';
import Recipe from '../Recipe';
describe('Recipe component', () => {
	let recipes = { 
		title: 'hello', 
		calories: 'calories', 
		img: 'img', url: '', 
		ingredients: [
        {
          text: 'good pinch of saffron',
          weight: 0.043750000056215814,
        },
        {
          text: '600.0ml hot vegetable stock',
          weight: 575.683736498877,
        },
        {
          text: '300.0g basmati rice and wild rice (Tilda is a good choice)',
          weight: 300,
        },
        {
          text: '300.0g basmati rice and wild rice (Tilda is a good choice)',
          weight: 300,
        },
	  ],  
	}
	it('should contain className', () => {
		const component = shallow(<Recipe title={recipes.title} img={recipes.img} url={recipes.url} ingredients={recipes.ingredients}/>)
		expect(
			component.contains(<h3 className='card-title text-center'>hello</h3>)
		).toBe(true);
	});
});
