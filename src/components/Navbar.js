import React from 'react';
import logo from '../img/logo_size.png';

const Navbar = () => {
	const aClick = () => {
		var burger = document.querySelector('.navbar-burger');
		var menu = document.querySelector('.navbar-menu');
		burger.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	};
	return (
		<nav
			className='navbar is-transparent'
			role='navigation'
			aria-label='main navigation'
		>
			<div className='container'>
				<div className='navbar-brand'>
					<a className='navbar-item' href='/'>
						<img
							src={logo}
							alt='Ivan Filipov | Front-end Developer &amp; Designer'
							height='48'
						/>
					</a>
					<a className='navbar-burger' onClick={aClick}>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
						<span aria-hidden='true'></span>
					</a>
				</div>
				<div className='navbar-menu' id='navMenu'>
					<div className='navbar-start'></div>
					<div className='navbar-end'>
						<a className='navbar-item' href='/mentorship.html'>
							Cover Letter
						</a>

						<div className='navbar-item'>
							<a className='button is-primary is-outlined is-rounded' href=''>
								Resume
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
