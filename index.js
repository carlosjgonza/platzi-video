import React from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

//ReactDOM.render(que voy a renderizar, donde lo voy a renderizar);
ReactDOM.render(
		<Media 	
			title="Qué es responsive design?" 
			author="Carlos González" 
			image="./images/covers/responsive.jpg"
			type="video" />, 
		app);