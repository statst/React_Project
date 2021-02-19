import React from 'react';

function Footer() {
	return (
		<>
			<footer>
				<p className='footer'>
					Connect on {''}
					<a href='https://www.linkedin.com/in/jyoti-shinde/'>LinkedIn</a>
				</p>
				<p className='create'>
					{' '}
					&copy; {new Date().getFullYear()} Copyright: Jyoti Shinde
				</p>
			</footer>
		</>
	);
}
export default Footer;
