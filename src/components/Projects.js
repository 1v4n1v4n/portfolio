import React from 'react';
import machine from '../img/quote-machine.JPG';
import previewer from '../img/previewer.JPG';
import drumbox from '../img/drum-box.JPG';
import usersrc from '../img/user-search.JPG';

const Projects = () => {
	return (
		<section
			className='section projects is-medium is-white has-text-centered'
			id='projects'
		>
			<div className='container is-narrow'>
				<h1 className='title is-spaced is-size-3-desktop is-size-4-mobile'>
					My Recent Work
				</h1>
				<h2 className='subtitle is-size-5-desktop'>
					Here are one of my first projects I've created with{' '}
					<span id='bold'>React</span>.
				</h2>
				<div className='project-grid'>
					<div className='columns is-multiline is-mobile'>
						<div className='column is-12-mobile is-half-tablet is-half-desktop'>
							<figure className='image is-3by2'>
								<img className='project-thumb' src={drumbox} alt='drum-box' />
								<figcaption>
									<h1 className='title is-size-5 is-size-4-widescreen'>
										Drum-box machine created with React & React Hooks.
									</h1>
									<a
										className='button is-primary is-outlined is-rounded'
										href='https://1v4n1v4n.github.io/drum-box'
										target='_blank'
										rel='noopener noreferrer'
									>
										<span>View Demo</span>
										<span className='icon'>
											<i className='fas fa-angle-right'></i>{' '}
										</span>
									</a>
								</figcaption>
								<div className='overlay'></div>
							</figure>
						</div>

						<div className='column is-12-mobile is-half-tablet is-half-desktop'>
							<figure className='image is-3by2'>
								<img
									className='project-thumb'
									src={previewer}
									alt='previewer'
								/>
								<figcaption>
									<h1 className='title is-size-5 is-size-4-widescreen'>
										A markdown previewer for converting .README files.
									</h1>
									<a
										className='button is-primary is-outlined is-rounded'
										href='https://1v4n1v4n.github.io/previewer'
										target='_blank'
										rel='noopener noreferrer'
									>
										<span>View Demo</span>
										<span className='icon'>
											<i className='fas fa-angle-right'></i>{' '}
										</span>
									</a>
								</figcaption>
								<div className='overlay'></div>
							</figure>
						</div>
						<div className='column is-12-mobile is-half-tablet is-half-desktop'>
							<figure className='image is-3by2'>
								<img
									className='project-thumb'
									src={machine}
									alt='random-quote'
								/>
								<figcaption>
									<h1 className='title is-size-5 is-size-4-widescreen'>
										Random Quote Machine created with React.
									</h1>
									<a
										className='button is-primary is-outlined is-rounded'
										href='https://1v4n1v4n.github.io/machine'
										target='_blank'
										rel='noopener noreferrer'
									>
										<span>View Demo</span>
										<span className='icon'>
											<i className='fas fa-angle-right'></i>
										</span>
									</a>
								</figcaption>
								<div className='overlay'></div>
							</figure>
						</div>
						<div className='column is-12-mobile is-half-tablet is-half-desktop'>
							<figure className='image is-3by2'>
								<img
									className='project-thumb'
									src={usersrc}
									alt='user-search'
								/>
								<figcaption>
									<h1 className='title is-size-5 is-size-4-widescreen'>
										An app for searching through Github users.
									</h1>
									<a
										className='button is-primary is-outlined is-rounded'
										href='https://1v4n1v4n.github.io/github-finder'
										target='_blank'
										rel='noopener noreferrer'
									>
										<span>View Demo</span>
										<span className='icon'>
											<i className='fas fa-angle-right'></i>{' '}
										</span>
									</a>
								</figcaption>
								<div className='overlay'></div>
							</figure>
						</div>
					</div>
				</div>
			</div>
			<div className='callout'>
				<div className='columns is-centered'>
					<div className='column'>
						<h1 className='title is-spaced'>
							Interested in collaborating or investing?
						</h1>
						<h2 className='subtitle is-size-5-desktop'>
							I’m always open to discussing new projects, partnership or good
							job opportunities.{' '}
						</h2>
						<a
							className='button is-primary is-outlined is-rounded is-medium'
							href='mailto:ivanfilipov17@outlook.com'
						>
							Start a conversation
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
