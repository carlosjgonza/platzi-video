import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';

import data from '../api.json';

const app = document.getElementById('app');

//ReactDOM.render(que voy a renderizar, donde lo voy a renderizar);
ReactDOM.render(<Home data={data} />, app);