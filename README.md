# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

# Create React App and add packages

`npx create-react-app`

`npm install or npm i`

## Installing React Router Dom v6 for Routing

`npm i react-router-dom@6`


## index.js syntax for applying React-Router-DOM-v6 in ReactJS v18

<i>index.js</i>

```
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
```

<i>App.js</i>

```
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import './static/App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
```

## Install React-Tailwind package

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both <i> tailwind.config.js </i> and postcss.config.js.

```
npx create-react-app my-project
cd my-project
```

<b>Configure your template paths</b>
Add the paths to all of your template files in your tailwind.config.js file.

```
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<b>Add the Tailwind directives to your CSS</b>

Add the @tailwind directives for each of Tailwind???s layers to your <l> ./src/index.css </i> file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## Deploying with Surge

<i>Install Surge on you Local Project </i>
```
npm i -g surge
```
<i>Build your project for production and deploy to surge</i>
```
npm run build
cd build
surge
```

### NOTE:
1. Just press enter when prompted for your project directory
2. You can change the subdomain for the auto-generated domain provided by Surge
3. After that you can now visit your app

## References:
1. https://jsshowcase.com/question/react-router-v6-how-to-render-multiple-component-inside-and-outside-a-div-with-the-same-path
2. https://github.com/aorebel/react-fe/tree/master/src
3. https://tailwindcss.com/
4. https://reactrouter.com/docs/en/v6
