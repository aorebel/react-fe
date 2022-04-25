<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import * as React from 'react';
//import Routing from './Router/index.js';
// import { Routes, Route} from 'react-router-dom';
// import SinglaPageNav from './Router/Nav/SinglePage.js';
// import Home from './Pages/Home.js';
import BaseRouter from './Router';
import './static/App.css';
>>>>>>> multi-layout

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
      
      <BaseRouter/>
>>>>>>> multi-layout
    </div>
  );
}

export default App;
