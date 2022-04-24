import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
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