import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './app/App.js';
import getGreeting from './greet.js';

import './index.css';

ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
);

console.log(getGreeting('World!'));
