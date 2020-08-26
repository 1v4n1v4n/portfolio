import React from 'react';
import avatar from '../img/mf-avatar.png';
import avatar_bottom from '../img/hero.png';

const Avatar = () => {
	return (
		<section className='hero is-white has-text-centered'>
			<div className='hero-body'>
				<div className='container'>
					<div className='columns is-centered'>
						<div className='column'>
							<h1 className='title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile'>
								Front-end Developer
							</h1>
							<h2 className='subtitle is-size-4-desktop'>
								I design and code beautifully simple things, and I love what I
								do.
							</h2>
							<img className='avatar' src={avatar} alt='little man' />
						</div>
					</div>
				</div>
			</div>
			<div className='hero-foot'>
				<div className='container'>
					<img className='is-bottom' src={avatar_bottom} alt='technology' />
				</div>
			</div>
		</section>
	);
};

export default Avatar;
