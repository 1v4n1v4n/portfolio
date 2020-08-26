import React from 'react';
import logo from '../img/logo11.png';

const Footer = () => {
	return (
		<footer className='section is-primary is-small has-text-centered'>
			<div className='container is-narrow'>
				<a className='logo' href='/'>
					<img
						id='footer-logo'
						src={logo}
						alt='Ivan Filipov | Front-end Developer &amp; Designer'
						height='48'
					/>
				</a>
				<div className='columns is-centered'>
					<div className='column is-one-third'>
						<h1 className='title is-size-4-touch'>
							Living, learning, &amp; leveling up one day at a time.
						</h1>
					</div>
				</div>
				<div className='social-icons'>
					<p className='field'>
						<a
							className='button is-medium'
							href='https://twitter.com/IvanFil34748021'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='icon is-small'>
								<i className='fab fa-twitter fa-fw'></i>{' '}
							</span>
						</a>
						<a
							className='button is-medium'
							href='https://github.com/1v4n1v4n'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='icon is-small'>
								<i className='fab fa-github fa-fw'></i>{' '}
							</span>
						</a>
						<a
							className='button is-medium'
							href='https://www.linkedin.com/in/ivan-filipov-84853b181/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='icon is-small'>
								<i className='fab fa-linkedin-in fa-fw'></i>
							</span>
						</a>
						<a
							className='button is-medium'
							href='https://angel.co/u/ivan-filipov-2'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='icon is-small'>
								<i className='fab fa-angellist fa-fw'></i>{' '}
							</span>
						</a>
						<a
							className='button is-medium'
							href='mailto:ivanfilipov17@outlook.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='icon is-small'>
								<i className='far fa-envelope fa-fw'></i>{' '}
							</span>
						</a>
					</p>
				</div>
				<div className='copyright'>
					Handcrafted by me
					<span
						className='icon has-white-text'
						style={{ verticalAlign: 'middle' }}
					>
						<i className='far fa-copyright'></i>{' '}
					</span>
					1v4n
				</div>
				<div className='made-by-bulma'>
					<a href='https://bulma.io'>
						<img
							src='https://bulma.io/images/made-with-bulma--white.png'
							alt='Made with Bulma'
							width='163'
							height='31'
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
