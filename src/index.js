import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

import App from './app/App.js';
import getGreeting from './greet.js';

import './index.css';

if (process.env.NODE_ENV !== 'production') {
    import('@axe-core/react').then(reactAxe => {
        reactAxe.default(React, ReactDOM, 1000);
    });
}

ReactDOM.render(
    <StrictMode>
        <ErrorBoundary
            fallback={
                <div className="error-boundary">
                    There was an error in the app!
                </div>
            }
        >
            <App />
        </ErrorBoundary>
    </StrictMode>,
    document.getElementById('root')
);

console.log(getGreeting('World!'));
