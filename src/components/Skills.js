import React from 'react';
import designer from '../img/designer.png';
import frontend from '../img/frontend.png';
import mentor from '../img/mentor.png';

const Skills = () => {
	return (
		<section className='section skills has-text-centered'>
			<div className='container is-narrow'>
				<div className='box'>
					<div className='content'>
						<div className='columns is-centered'>
							<div className='column'>
								<figure className='image'>
									<img
										className='is-skill-icon'
										src={designer}
										alt='pen & pencil'
									/>
								</figure>
								<h1 className='title is-size-4 is-spaced'>Designer</h1>
								<p>
									I value simple content structure, clean design patterns, and
									thoughtful interactions.
								</p>
								<p className='list-title has-text-primary has-text-weight-normal'>
									Things I enjoy designing:
								</p>
								<p>UX, UI, Web, Mobile, Apps, Logos</p>
								<p className='list-title has-text-primary has-text-weight-normal'>
									Design Tools:
								</p>
								<ul>
									<li>Figma</li>
									<li>Invision</li>
									<li>Marvel</li>
									<li>Pen &amp; Paper</li>
									<li>Sketch</li>
									<li>Webflow</li>
								</ul>
							</div>
							<div className='column'>
								<figure className='image'>
									<img
										className='is-skill-icon'
										src={frontend}
										alt='computer window'
									/>
								</figure>
								<h1 className='title is-size-4 is-spaced'>
									Front-end Developer
								</h1>
								<p>
									I like to code things from scratch, and enjoy bringing ideas
									to life in the browser.
								</p>
								<p className='list-title has-text-primary has-text-weight-normal'>
									Languages I speak:
								</p>
								<p>HTML5, CSS3, JavaScript, React, Sass</p>
								<p className='list-title has-text-primary has-text-weight-normal'>
									Dev Tools:
								</p>
								<ul>
									<li>Visual Studio Code</li>
									<li>Bootstrap</li>
									<li>Bulma</li>
									<li>Codepen</li>
									<li>Github</li>
									<li>Gitlab</li>
									<li>Terminal</li>
								</ul>
							</div>
							<div className='column'>
								<figure className='image'>
									<img className='is-skill-icon' src={mentor} alt='book' />
								</figure>
								<h1 className='title is-size-4 is-spaced'>
									Road to Full-Stack
								</h1>
								<p>
									I started my coding journey with Python, then moved on to Java
									and eventually C++.
								</p>
								<p className='list-title has-text-primary has-text-weight-normal'>
									My career goal currently:
								</p>
								<p>Becoming Full-Stack developer. </p>
								<p className='list-title has-text-primary has-text-weight-normal'>
									Back-end Knowledge:
								</p>
								<ul>
									<li>C++</li>
									<li>Java</li>
									<li>Python</li>
									<li>Express.js</li>
									<li>Node.js</li>
									<li>MongoDB</li>
									<li>Firebase</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
