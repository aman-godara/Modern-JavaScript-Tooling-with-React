import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App.js';
import getGreeting from './greet.js';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(getGreeting('World!'));
