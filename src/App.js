import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Avatar from './components/Avatar';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Avatar />
			<Introduction />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
};

export default App;
