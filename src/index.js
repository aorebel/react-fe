import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import './static/index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';

//import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App tab="home" />
        </BrowserRouter>
    </React.StrictMode>
    
    );

reportWebVitals();