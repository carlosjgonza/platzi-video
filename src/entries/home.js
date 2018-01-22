import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';

import data from '../api.json';

const homeContainer = document.getElementById('home-container');

//ReactDOM.render(que voy a renderizar, donde lo voy a renderizar);
ReactDOM.render(<Home data={data} />, homeContainer);