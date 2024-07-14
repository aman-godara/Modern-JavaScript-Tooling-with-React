import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';
import getGreeting from './greet';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(getGreeting('World!'));
