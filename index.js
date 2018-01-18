import React from 'react';
import ReactDOM from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app');

//ReactDOM.render(que voy a renderizar, donde lo voy a renderizar);
ReactDOM.render(<Playlist data={data} />, app);